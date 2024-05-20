import Chips from "@/components/chips/page";
import Feeds from "@/components/feeds/Feeds";
import TopInput from "@/components/topInput/page";
import { Box, Text } from "@chakra-ui/react";
const page = () => {
  return (
    <Box>
      <Text align="center">Feed</Text>
      <TopInput />
      <Chips />
      <Feeds />
    </Box>
  );
};

export default page;
