"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { data } from "@/constants/data";
import { useAppSelector } from "@/redux/store";

import { usePathname } from "next/navigation";

const id: React.FC = () => {


  const dataState = useAppSelector((state) => state.feedSlice);


  const pathname: string = usePathname();
  // console.log(pathname.split("/"));
  const lastPathSegment = pathname.split("/").pop() || ""; // {|| ""} to remove TS warning
  const obj = dataState.find((ele) => ele.id === +lastPathSegment);
  return (
    <>
      <Flex
        color="gray.700"
        justifyContent="center"
        alignItems="center"
        h="100vh"
        textAlign="center"
      >
        <Box>
          <Text fontWeight="900" mb="10px">
            Post
          </Text>
          <Text as="b">{obj?.text}</Text>
          <Text color="gray.600">posted on {obj?.posted_on}</Text>
        </Box>
      </Flex>
    </>
  );
};
export default id;
