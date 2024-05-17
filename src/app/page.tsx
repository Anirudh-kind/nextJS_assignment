import { Box, Center, Input, Text, Button } from "@chakra-ui/react";
import Chips from "../components/chips/page";

const page = () => {
  return (
    <Box w="70%">
      <Text align="center">Feed</Text>
      <Center>
        <Box w="80%">
          <Input placeholder="large size" size="lg" />
          <Box w="100%" textAlign="right">
            <Button type="submit">Post</Button>
          </Box>
        </Box>
      </Center>
      <Chips />
    </Box>
  );
};

export default page;
