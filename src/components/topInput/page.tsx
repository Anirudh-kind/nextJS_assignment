"use client";
import React, { useState } from "react";
import { Center, Box, Input, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addFeed } from "@/redux/features/feedSlice";
import { useRouter } from "next/navigation";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { months } from "@/constants/data";

interface Post {
  text: string;
  id: number;
  posted_on: string;
}

const TopInput = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useAppSelector((state) => state.authSlice.isAuth);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (isAuth) {
      const d = new Date();
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; // first letter is capital here

      const post: Post = {
        text: inputValue,
        id: Date.now(),
        posted_on: `${daysOfWeek[d.getDay()]} ${
          months[d.getMonth()]
        } ${d.getDate()} ${d.getFullYear()}`,
      };

      dispatch(addFeed(post));
      setInputValue("");
    } else {
      router.push("/login");
    }
  };

  return (
    <Center>
      <Box>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          placeholder="large size"
          size="lg"
        />
        <Box mt="10px" textAlign="right">
          <Button
            isDisabled={inputValue === ""}
            onClick={handleClick}
            colorScheme="teal"
            type="submit"
          >
            Post
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default TopInput;
