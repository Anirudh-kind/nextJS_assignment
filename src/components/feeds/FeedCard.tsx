// FeedCard.tsx
"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteFeed } from "@/redux/features/feedSlice";
import { AppDispatch } from "@/redux/store";

interface Props {
  content: string;
  date: string;
  id: number;
}

const FeedCard: React.FC<Props> = ({ content, date, id }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  // console.log(date);

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("btn clicked", id);
    dispatch(deleteFeed(id));
  };

  return (
    <Box mt="10" boxShadow="0px 4px 6px rgba(0.2,0.2,0.2,0.2)"w="80%"p="4" borderRadius="xl" border="1px solid grey"
    >
      <Text marginBottom="10px" as="b">
        {content}
      </Text>
      <Flex mt="30px" justifyContent="space-between" alignItems="center">
        <Text color="gray.500">posted on {date}</Text>
        <Button onClick={handleDelete} size="sm" colorScheme="teal">
          delete
        </Button>
      </Flex>
    </Box>
  );
};

export default FeedCard;
