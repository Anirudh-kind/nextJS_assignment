"use client";
import { logOut } from "@/redux/features/authSlice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { Box, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";
import "./style.css";

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
    <Flex className="sidebar">
      <Box>
        {points.map((point, index) => (
          <Box key={index} className="linkBox">
            <Link href={point.route} className="link">
              <Box>{point.name}</Box>
            </Link>
          </Box>
        ))}

        {userState ? (
          <Button onClick={handleLogout} colorScheme="blue">
            Logout
          </Button>
        ) : (
          <Link href="/login" className="link">
            Login
          </Link>
        )}
      </Box>
    </Flex>
  );
};

export default Sidebar;
