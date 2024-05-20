"use client";
import { daysInWeek } from "@/constants/data";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { changeSpecificDay } from "@/redux/features/specificDaySlice";
const RightBar: React.FC = () => {
  const dispatch = useDispatch();
  const specificDay = useAppSelector((state) => state.specificDaySlice);

  const dataState = useAppSelector((state) => state.feedSlice);
  const postCounts: { [key: string]: number } = {
    sun: 0,
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
  };
  dataState.forEach((post) => {
    const date = new Date(post.posted_on);
    const day = daysInWeek[date.getDay()];
    postCounts[day]++;
  });
  const handleDayChange = (currentDay: string) => {
    dispatch(changeSpecificDay(currentDay));
  };
  const removeSpecificDay=()=>{
    dispatch(changeSpecificDay('all'))
  }

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
          <Text
            fontWeight={specificDay === day ? "900" : "normal"}
            onClick={() => {
              specificDay !== day ? handleDayChange(day) :removeSpecificDay()
            }}
            color="white"
            align="center"
            cursor="pointer"
            key={index}
          >
            {day} | {postCounts[day]}
          </Text>
        ))}
      </Box>
    </Flex>
  );
};

export default RightBar;
