import { daysInWeek } from "@/constants/data";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const RightBar: React.FC = () => {
  const _Points: Array<string> = [...daysInWeek];
  return (
    <Flex
      alignItems='center'
      justifyContent='center'
      bg="teal"
      position="fixed" 
      top={0} right={0} 
      bottom={0} 
      borderRight="1px solid grey"
      h="100vh"
      width="200px" 
      zIndex={10} overflowY="auto"
    >
      <Box>
        {_Points.map((ele: string, ind: number) => (
          <Text color="white" align="center" cursor="pointer" key={ind}>
            {ele}
          </Text>
        ))}
      </Box>
    </Flex>
  );
};

export default RightBar;
