"use client";
import React,{memo} from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import Link from "next/link";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import { usePathname } from "next/navigation";
import useValidPath from "@/hooks/useValidPath";
import { aboutOptions } from "@/constants/data";

const About: React.FC = () => {
  const path = usePathname();
  const { lastPathname } = useValidPath(path, aboutOptions);
  const userState = useAuthRedirect("/login", aboutOptions, lastPathname);

  if (!userState) {
    return (
      <div>
        <h1>You have entered a protected route, login first</h1>
        <h1>Redirecting you to somewhere</h1>
      </div>
    );
  }

  return (
    <Box overflowY="hidden" h="100vh">
      <Text textAlign="center">About</Text>
      <Grid h="100%" templateColumns="repeat(3, 1fr)" gap={1}>
        <Flex justifyContent="center" alignItems="center">
          <Box>
            {aboutOptions.map((ele) => (
              <Link key={ele} href={`/about/${ele}`}>
                <Text
                  color={lastPathname === ele ? "red" : "grey.600"}
                  mt="4"
                  mb="4"
                  textTransform="uppercase"
                >
                  OPTION {ele}
                </Text>
              </Link>
            ))}
          </Box>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Box>
            {aboutOptions.map((ele, ind) => (
              <Link key={ind + 1} href={`/about/${lastPathname}/${ind + 1}`}>
                <Text color="grey.600" mt="4" mb="4">
                  <span style={{ textTransform: "uppercase" }}>
                    {lastPathname}
                  </span>
                  : OPTION info{" "}
                  <span style={{ textTransform: "uppercase" }}>
                    {lastPathname}
                  </span>
                  {ind + 1}
                </Text>
              </Link>
            ))}
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
};

export default memo(About);