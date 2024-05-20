import { daysInWeek, data } from "@/constants/data";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const RightBar: React.FC = () => {
  // Initialize an object to store the count of posts for each day
  const postCounts: { [key: string]: number } = {
    sun: 0,
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
  };

  // Parse the posted_on dates and count the posts for each day
  data.forEach((post) => {
    const date = new Date(post.posted_on);
    const day = daysInWeek[date.getDay()];
    postCounts[day]++;
  });

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      bg="teal"
      position="fixed"
      top={0}
      right={0}
      bottom={0}
      borderRight="1px solid grey"
      h="100vh"
      width="200px"
      zIndex={10}
      overflowY="auto"
    >
      <Box>
        <Text color="white" mb="10">
          Weekly
        </Text>
        {daysInWeek.map((day, index) => (
          <Text color="white" align="center" cursor="pointer" key={index}>
            {day} | {postCounts[day]}
          </Text>
        ))}
      </Box>
    </Flex>
  );
};

export default RightBar;
