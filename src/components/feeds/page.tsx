"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  content: string;
  date: string;
}

const Feeds: React.FC<Props> = ({ content, date }: Props) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); 
    console.log("Delete button clicked");
  };

  return (
    <Box
      mt="10"
      boxShadow="0px 4px 6px rgba(0.2,0.2,0.2,0.2)"
      w="80%"
      p="4"
      borderRadius="xl"
      border="1px solid grey"
    >
      <Text marginBottom="10px" as="b">
        {content}
      </Text>
      <Flex mt="30px" justifyContent="space-between" alignItems="center">
        <Text color="gray.500">posted on {date}</Text>
        <Button
          onClick={handleDelete}
          size="sm"
          colorScheme="teal"
        >
          delete
        </Button>
      </Flex>
    </Box>
  );
};

export default Feeds;
