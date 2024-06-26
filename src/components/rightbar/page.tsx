"use client";
import { daysInWeek } from "@/constants/data";
import { pushNewDay, removeDay } from "@/redux/features/specificDaySlice";
import { useAppSelector } from "@/redux/store";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import "./page.css";

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

  const handleDayAdd = (currentDay: string) => {
    dispatch(pushNewDay(currentDay));
  };

  const removeSpecificDay = (currentDay: string) => {
    dispatch(removeDay(currentDay));
  };

  return (
    <Flex className="right-bar">
      <Box>
        <Text color="white" mb="10">
          Weekly
        </Text>
        {daysInWeek.map((day, index) => (
          <Text
            fontWeight={specificDay.includes(day) ? "900" : "normal"}
            onClick={() => {
              specificDay.includes(day)
                ? removeSpecificDay(day)
                : handleDayAdd(day);
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
