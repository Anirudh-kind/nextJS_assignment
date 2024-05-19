"use client";
import { Box, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { logOut } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";

interface Point {
  name: string;
  route: string;
}

const Sidebar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const userState= useAppSelector((state)=>state.authSlice.isAuth)

  // const [user, setUser] = useState("");

  // useEffect(() => {
  //   const userString = sessionStorage.getItem("user");
  //   if (userString) {
  //     try {
  //       setUser(JSON.parse(userString));
  //     } catch (error) {
  //       console.error("Error parsing user data:", error);
  //     }
  //   }
  // }, []);

  const handleLogout = () => {
    sessionStorage.clear();
    // setUser("");
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
