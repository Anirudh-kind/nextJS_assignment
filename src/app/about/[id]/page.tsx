"use client";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const About = () => {
  const path = usePathname();
  const PathArr = path.split("/");

  const lastPathname = PathArr[PathArr.length - 1];
  console.log(PathArr.length);

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
                  <Link href={ele}>
                    <Text
                      color={lastPathname === ele ? "red" : "grey.600"}
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
                  <Link href={`${lastPathname}/${ind + 1}`}>
                    <Text color="grey.600" mt="4" mb="4">
                      <span style={{ textTransform: "uppercase" }}>
                        {lastPathname}
                      </span>
                      :OPTION info{" "}
                      <span style={{ textTransform: "uppercase" }}>
                        {lastPathname}
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
              <Text>1 | 1 1</Text>
            </Box>
          </Flex>
        </Grid>
      </Box>
    </>
  );
};

export default About;
