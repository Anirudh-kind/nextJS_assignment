import { Box, Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Point {
  name: string;
  route: string;
}

const Sidebar: React.FC = () => {
  const points: Array<Point> = [
    { name: "HOME", route: "/" },
    { name: "ABOUT", route: "/about/a" },
    { name: "login", route: "/login" },
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
            <Link
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                display: "block",
              }}
              href={point.route}
            >
              <Box _hover={{ textDecoration: "underline" }}>{point.name}</Box>
            </Link>
          </Box>
        ))}
        <Button colorScheme="blue">Login</Button>
      </Box>
    </Flex>
  );
};

export default Sidebar;
