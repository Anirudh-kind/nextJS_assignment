import { Box, Text } from "@chakra-ui/react";
import React from "react";
const temp: React.FC = () => {
  const _Points: Array<string> = ["HOME", "ABOUT", "LOGIN"];
  return (
    <>
      <Box borderRight="1px solid grey" h="100vh" w="10vw">
        {_Points.map((ele: string, ind: number) => (
          <Text align="center" cursor="pointer" key={ind}>
            {ele}
          </Text>
        ))}
      </Box>
    </>
  );
};

export default temp;
