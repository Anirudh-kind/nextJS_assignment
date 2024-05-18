import { Box, Center, Input, Text, Button, Flex } from "@chakra-ui/react";
import Chips from "@/components/chips/page";
import Feeds from "@/components/feeds/page";
import { data } from "@/constants/data";
import Link from "next/link";
const page = () => {
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
        <Link
          style={{ cursor: "pointer" }}
          href={`/detail/${ele.id}`}
          key={ele.id}
        >
          <Flex justifyContent="center">
            <Feeds date={ele.posted_on} content={ele.text} />
          </Flex>
        </Link>
      ))}
    </Box>
  );
};

export default page;
