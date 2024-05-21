"use client";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";

const About = () => {
  const userState = useAppSelector((state) => state.authSlice.isAuth);
  const router = useRouter();

  const path = usePathname();
  const PathArr = path.split("/");
  
  const left = PathArr[PathArr.length - 2];
  const right = +PathArr[PathArr.length - 1];
  
  const options = ["a", "b", "c", "d"];
  
  useEffect(() => {
    if (!userState) {
      router.push("/login");
    } else if (!options.includes(left) || isNaN(right) || right < 1 || right > options.length) {
      router.push("/about/a/1");
    }
  }, [userState, left, right, router]);

  return (
    <>
      {!userState ? (
        <>
          <h1>You have entered a protected route, login first</h1>
          <h1>Redirecting you to somewhere</h1>
        </>
      ) : (
        <Box overflowY="hidden" h="100vh">
          <Text textAlign="center">About</Text>
          <Grid h="100%" templateColumns="repeat(3, 1fr)" gap={1}>
            <Flex justifyContent="center" alignItems="center">
              <Box>
                {options.map((ele) => {
                  return (
                    <Link key={ele} href={`/about/${ele}/1`}>
                      <Text
                        color={left === ele ? "red" : "grey.600"}
                        mt="4"
                        mb="4"
                        textTransform="uppercase"
                      >
                        OPTION {ele}
                      </Text>
                    </Link>
                  );
                })}
              </Box>
            </Flex>
            <Flex justifyContent="center" alignItems="center">
              <Box>
                {options.map((ele, ind) => {
                  return (
                    <Link key={ind + 1} href={`/about/${left}/${ind + 1}`}>
                      <Text
                        color={right === ind + 1 ? "red" : "grey.600"}
                        mt="4"
                        mb="4"
                      >
                        <span style={{ textTransform: "uppercase" }}>
                          {left}
                        </span>
                        : OPTION info{" "}
                        <span style={{ textTransform: "uppercase" }}>
                          {left}
                        </span>
                        {ind + 1}
                      </Text>
                    </Link>
                  );
                })}
              </Box>
            </Flex>
            <Flex justifyContent="center" alignItems="center">
              <Box>
                <Text color="grey.600" mt="4" mb="4">
                  Details
                </Text>
                <Text>
                  {options.findIndex((ele) => ele === left) + 1} | {right} 1
                </Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default About;
