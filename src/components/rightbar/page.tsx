import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { daysInWeek } from "@/constants/data";

const RightBar: React.FC = () => {
  const _Points: Array<string> = [...daysInWeek];
  return (
    <>
      <Box flex="1" borderRight="1px solid grey" h="100vh">
        {_Points.map((ele: string, ind: number) => (
          <Text align="center" cursor="pointer" key={ind}>
            {ele}
          </Text>
        ))}
      </Box>
    </>
  );
};

export default RightBar;
