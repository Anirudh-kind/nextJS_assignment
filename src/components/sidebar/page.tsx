"use client";
import { logOut } from "@/redux/features/authSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { Box, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const userState = useAppSelector((state) => state.authSlice.isAuth);

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(logOut());
  };

  return (
    <Flex
      position="fixed"
      alignItems="center"
      justifyContent="center"
      borderRight="1px solid grey"
      h="100vh"
      w="10vw"
    >
      <Box>
        <Box textAlign="center" mb={4}>
          <Box
            cursor="pointer"
            onClick={() => {
              router.push("/");
            }}
            _hover={{ textDecoration: "underline" }}
          >
            HOME
          </Box>
        </Box>
        <Box textAlign="center" mb={4}>
          <Box
            cursor="pointer"
            onClick={() => {
              userState ? router.push("/about/a") : router.push("/login");
            }}
            _hover={{ textDecoration: "underline" }}
          >
            ABOUT
          </Box>
        </Box>

        {userState ? (
          <Button onClick={handleLogout} colorScheme="blue">
            Logout
          </Button>
        ) : (
          <Link
            href="/login"
            style={{
              cursor: "pointer",
              fontWeight: "bold",
              display: "block",
            }}
          >
            Login
          </Link>
        )}
      </Box>
    </Flex>
  );
};

export default Sidebar;
