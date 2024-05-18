import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
const sidebar: React.FC = () => {
  interface points {
    name: string;
    route: string;
  }
  const _Points: Array<points> = [
    { name: "HOME", route: "/" },
    { name: "ABOUT", route: "/about" },
  ];
  return (
    <>
      <Flex
        position="fixed"
        alignItems="center"
        justifyContent="center"
        borderRight="1px solid grey"
        h="100vh"
        w="10vw"
      >
        <Box>
          {_Points.map((ele: points, ind: number) => (
            <Box>
              <Link
                style={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                href={ele.route}
                key={ind}
              >
                {ele.name}
              </Link>
            </Box>
          ))}
          <Button colorScheme="blue">login</Button>
        </Box>
      </Flex>
    </>
  );
};

export default sidebar;
