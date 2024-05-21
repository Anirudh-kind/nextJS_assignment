"use client";
import { logOut } from "@/redux/features/authSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { Box, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

interface Point {
  name: string;
  route: string;
}

const Sidebar: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const userState = useAppSelector((state) => state.authSlice.isAuth);

  const handleLogout = () => {
    sessionStorage.clear();
    dispatch(logOut());
  };

  const points: Array<Point> = [
    { name: "HOME", route: "/" },
    { name: "ABOUT", route: "/about/a" },
  ];

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
        {points.map((point, index) => (
          <Box key={index} textAlign="center" mb={4}>
            <Link
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                display: "block",
              }}
              href={point.route}
            >
              <Box _hover={{ textDecoration: "underline" }}>{point.name}</Box>
            </Link>
          </Box>
        ))}

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
