import Chips from "@/components/chips/page";
import Feeds from "@/components/feeds/Feeds";
import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
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
      <Feeds />
    </Box>
  );
};

export default page;
