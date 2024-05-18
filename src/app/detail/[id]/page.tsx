import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { data } from "@/constants/data";

import { headers } from "next/headers";

const id: React.FC<Request> = (request: Request) => {
  const headersList = headers();
  
  const fullUrl = headersList.get("referer") || "";
  console.log("fullURL:" + fullUrl);

  // Extracting the last segment of the URL
  const url = new URL(fullUrl);
  const lastPathSegment = url.pathname.split("/").pop(); // Extracts the last path segment
    console.log(lastPathSegment)
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
        </Box>
      </Flex>
    </>
  );
};
export default id;
