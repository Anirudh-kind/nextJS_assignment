"use client";
import React from "react";
import { Button, Center } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { logIn } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

const Page = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const userLogin = () => {
    const dummyUser = {
      username: "guest",
      token: "dummy-token-12345",
    };
    sessionStorage.setItem("user", JSON.stringify(dummyUser));
    dispatch(logIn());
    router.push("/");
    // console.log("User logged in:", dummyUser);
  };
  return (
    <>
      <Center>
        <h1>This is a guest login</h1>
      </Center>
      <Center>
        <Button onClick={userLogin} colorScheme="blue">
          Login
        </Button>
      </Center>
    </>
  );
};

export default Page;
