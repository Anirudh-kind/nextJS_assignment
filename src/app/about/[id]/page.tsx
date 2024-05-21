"use client";
import { useEffect } from "react";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  const userState = useAppSelector((state) => state.authSlice.isAuth);
  const path = usePathname();
  const PathArr = path.split("/");

  const lastPathname = PathArr[PathArr.length - 1];
  //   console.log(PathArr.length);

  const options = ["a", "b", "c", "d"];
  useEffect(() => {
    // console.log(userState);
    if (!userState) {
      router.push("/login");
    } else if (!options.includes(lastPathname)) {
      router.push("/about/a");
    }
  }, [userState, router, lastPathname]);

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
            {/* <Flex justifyContent="center" alignItems="center">
            <Box>
              <Text color="grey.600" mt="4" mb="4">
                Details
              </Text>
              <Text>1 | 1 1</Text>
            </Box>
          </Flex> */}
          </Grid>
        </Box>
      )}
    </>
  );
};

export default About;
