import { Box, Center, Input, Text, Button, Flex } from "@chakra-ui/react";
import Chips from "../components/chips/page";
import Feeds from "@/components/feeds/page";
import { data } from "@/constants/data";
const page = () => {
  const arr = ["HELLO", "HELLO", "HELLO", "HELLO", "HELLO"];
  return (
    <Box>
      <Text align="center">Feed</Text>

      <Center>
        <Box>
          <Input type="string" placeholder="large size" size="lg" />
          <Box mt="10px" textAlign="right">
            <Button colorScheme="teal" type="submit">
              Post
            </Button>
          </Box>
        </Box>
      </Center>
      <Chips />
      {data.map((ele) => (
        <Flex key={ele.id} justifyContent="center">
          <Feeds date={ele.posted_on} content={ele.text} />
        </Flex>
      ))}
    </Box>
  );
};

export default page;
