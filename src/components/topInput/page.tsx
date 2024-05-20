"use client";
import React, { useState } from "react";
import { Center, Box, Input, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addFeed } from "@/redux/features/feedSlice";

interface Post {
  text: string;
  id: number;
  posted_on: string;
}

const TopInput = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    let d = new Date();
    const daysOfWeek = ["Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat", "Sun"];
    const months = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    const post: Post = {
      text: inputValue,
      id: Date.now(),
      posted_on: `${daysOfWeek[d.getDay()]}  ${
        months[d.getMonth() + 1]
      } ${d.getDate()}  ${d.getFullYear()}`,
    };

    dispatch(addFeed(post));
  };
  return (
    <Center>
      <Box>
        <Input
          value={inputValue}
          onChange={handleInputChange}
          type="string"
          placeholder="large size"
          size="lg"
        />
        <Box mt="10px" textAlign="right">
          <Button onClick={handleClick} colorScheme="teal" type="submit">
            Post
          </Button>
        </Box>
      </Box>
    </Center>
  );
};

export default TopInput;
