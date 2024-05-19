"use client";
import React from "react";
import { Button, Center } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const userLogin = () => {
    const dummyUser = {
      username: "guest",
      token: "dummy-token-12345",
    };
    localStorage.setItem("user", JSON.stringify(dummyUser));
    router.push("/");
    console.log("User logged in:", dummyUser);
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
