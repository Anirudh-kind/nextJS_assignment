"use client";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const About = () => {
  const path = usePathname();
  const PathArr = path.split("/");

  const left = PathArr[PathArr.length - 2];
  const right = +PathArr[PathArr.length - 1];

  console.log(PathArr);

  const options = ["a", "b", "c", "d"];

  return (
    <>
      <Box overflowY="hidden" h="100vh">
        <Text textAlign="center">About</Text>
        <Grid h="100%" templateColumns="repeat(3, 1fr)" gap={1}>
          <Flex justifyContent="center" alignItems="center">
            <Box>
              {options.map((ele) => {
                return (
                  <Link href={`/about/${ele}`}>
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
                  <Link href={`${ind+1}`}>
                    <Text
                      color={right === ind + 1 ? "red" : "grey.600"}
                      mt="4"
                      mb="4"
                    >
                      <span style={{ textTransform: "uppercase" }}>{left}</span>
                      :OPTION info{" "}
                      <span style={{ textTransform: "uppercase" }}>{left}</span>
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
    </>
  );
};

export default About;