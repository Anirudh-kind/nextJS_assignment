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
      position="fixed" // Position fixed to make it stay in place
      top={0} // Align it to the top of the viewport
      right={0} // Align it to the right of the viewport
      bottom={0} // Stretch it to the bottom of the viewport
      borderRight="1px solid grey"
      h="100vh"
      width="200px" // Set width of the sidebar
      zIndex={10} // Set a high z-index to ensure it's above other content
      overflowY="auto" // Enable vertical scrolling if content overflows
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
