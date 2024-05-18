import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

interface Point {
  name: string;
  route: string;
}

const Sidebar: React.FC = () => {
  const points: Array<Point> = [
    { name: "HOME", route: "/" },
    { name: "ABOUT", route: "/about" },
  ];

  return (
    <Flex
      position="fixed"
      alignItems="center"
      justifyContent="center"
      borderRight="1px solid grey"
      h="100vh"
      w="10vw"
    >
      <Box>
        {points.map((point, index) => (
          <Box key={index} textAlign="center" mb={4}>
            <Link href={point.route}>
              <Box
                as="a"
                cursor="pointer"
                fontWeight="bold"
                display="block"
                textDecoration="none"
                _hover={{ textDecoration: "underline" }}
              >
                {point.name}
              </Box>
            </Link>
          </Box>
        ))}
        <Button colorScheme="blue">Login</Button>
      </Box>
    </Flex>
  );
};

export default Sidebar;
