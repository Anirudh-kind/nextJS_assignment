import React from "react";
import { Flex } from "@chakra-ui/react";
import { data } from "@/constants/data";
import Link from "next/link";
import FeedCard from "./page";
const Feeds = () => {
  return (
    <div>
      {data.map((ele) => (
        <Link
          style={{ cursor: "pointer" }}
          href={`/detail/${ele.id}`}
          key={ele.id}
        >
          <Flex justifyContent="center">
            <FeedCard date={ele.posted_on} content={ele.text} />
          </Flex>
        </Link>
      ))}
    </div>
  );
};

export default Feeds;