"use client";
import React, { useState } from "react";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";

const chips: React.FC = () => {
  const [days, setDays] = useState<Array<string>>([
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ]);

  return (
    <>
      chips
      {days.map((ele: string, index: number) => (
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
