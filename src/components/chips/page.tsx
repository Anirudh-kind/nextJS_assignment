"use client";
import React, { useState } from "react";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import { daysInWeek } from "@/constants/data";
import { useAppSelector } from "@/redux/store";


const chips: React.FC = () => {
  const [days, setDays] = useState<Array<string>>([...daysInWeek]);

  const specificDay = useAppSelector((state) => state.specificDaySlice);

  return (
    <>
      chips
      {specificDay.map((ele: string, index: number) => (
        <Tag
          m="1"
          size="md"
          key={index}
          borderRadius="full"
          variant="solid"
          colorScheme="blue"
        >
          <TagLabel>{ele}</TagLabel>
          <TagCloseButton
            onClick={() => {
              const updatedDays = [...days];
              updatedDays.splice(index, 1);
              setDays(updatedDays);
            }}
          />
        </Tag>
      ))}
    </>
  );
};

export default chips;
