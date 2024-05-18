"use client";
import React, { useEffect, useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { data } from "@/constants/data";

import { usePathname } from "next/navigation";

const id: React.FC = () => {
  const pathname: string = usePathname();
  const [lastPathSegment, setLastPathSegment] = useState("");

  useEffect(() => {
    const temp: any = pathname.split("/").pop();
    setLastPathSegment(temp);
  }, [pathname]);

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
          <Text as="b">Hellow</Text>
          <Text color="gray.600">posted on {lastPathSegment}</Text>
          {/* <Text color="gray.600">ans: {ans}</Text> */}
        </Box>
      </Flex>
    </>
  );
};
export default id;
