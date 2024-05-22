"use client";
import React, { useEffect } from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import Link from "next/link";
import useAuthRedirect from "@/hooks/useAuthRedirect";
import { usePathname, useRouter } from "next/navigation";
import useValidPath from "@/hooks/useValidPath";
import { aboutOptions } from "@/constants/data";

const About: React.FC = () => {
  const router = useRouter();
  const path = usePathname();
  const { lastPathname, secondLastPathname, isValid } = useValidPath(
    path,
    aboutOptions
  );
  const userState = useAuthRedirect("/login", aboutOptions, secondLastPathname);

  useEffect(() => {
    if (userState && !isValid) {
      router.push("/about/a/1");
    }
  }, [userState, isValid, router]);

  if (!userState) {
    return (
      <div>
        <h1>You have entered a protected route, login first</h1>
        <h1>Redirecting you to somewhere</h1>
      </div>
    );
  }

  if (!isValid) {
    return <div>Redirecting you to /about/a/1</div>;
  }

  return (
    <Box overflowY="hidden" h="100vh">
      <Text textAlign="center">About</Text>
      <Grid h="100%" templateColumns="repeat(3, 1fr)" gap={1}>
        <Flex justifyContent="center" alignItems="center">
          <Box>
            {aboutOptions.map((ele) => (
              <Link key={ele} href={`/about/${ele}/1`}>
                <Text
                  color={secondLastPathname === ele ? "red" : "grey.600"}
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
              <Link
                key={ind + 1}
                href={`/about/${secondLastPathname}/${ind + 1}`}
              >
                <Text
                  color={+lastPathname == ind + 1 ? "red" : "grey.600"}
                  mt="4"
                  mb="4"
                >
                  <span style={{ textTransform: "uppercase" }}>
                    {secondLastPathname}
                  </span>
                  : OPTION info{" "}
                  <span style={{ textTransform: "uppercase" }}>
                    {secondLastPathname}
                  </span>
                  {ind + 1}
                </Text>
              </Link>
            ))}
          </Box>
        </Flex>
        <Flex justifyContent="center" alignItems="center">
          <Box>
            <Text color="grey.600" mt="4" mb="4">
              Details
            </Text>
            <Text>
              {aboutOptions.findIndex((ele) => ele === secondLastPathname) + 1}{" "}
              | {lastPathname} 1
            </Text>
          </Box>
        </Flex>
      </Grid>
    </Box>
  );
};

export default About;
