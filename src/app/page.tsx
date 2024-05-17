import { Box, Center, Input, Text, Button, Flex } from "@chakra-ui/react";
import Chips from "../components/chips/page";
import Feeds from "@/components/feeds/page";
const page = () => {
  const arr = ["HELLO", "HELLO", "HELLO", "HELLO", "HELLO"];
  return (
    <Box w="70%" ml='10vw'> 
      <Text align="center">Feed</Text>
      <Center>
        <Box w="80%">
          <Input type="string" placeholder="large size" size="lg" />
          <Box mt="10px" w="100%" textAlign="right">
            <Button colorScheme="teal" type="submit">
              Post
            </Button>
          </Box>
        </Box>
      </Center>
      <Chips />
      {arr.map((ele) => (
        <Flex justifyContent="center">
          <Feeds date="thu may 16 2024" content="HELLO" />
        </Flex>
      ))}
    </Box>
  );
};

export default page;
