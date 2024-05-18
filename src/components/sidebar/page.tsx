import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
const sidebar: React.FC = () => {
  const _Points: Array<string> = ["HOME", "ABOUT"];
  return (
    <>
      <Flex
        position="fixed"
        alignItems="center"
        justifyContent="center"
        borderRight="1px solid grey"
        h="100vh"
        w="10vw"
      >
        <Box>
          {_Points.map((ele: string, ind: number) => (
            <Text fontWeight="bold" align="center" cursor="pointer" key={ind}>
              {ele}
            </Text>
          ))}
          <Button colorScheme="blue">login</Button>
        </Box>
      </Flex>
    </>
  );
};

export default sidebar;