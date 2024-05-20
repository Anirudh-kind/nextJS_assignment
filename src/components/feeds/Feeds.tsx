"use client";
import { useAppSelector } from "@/redux/store";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import FeedCard from "./page";

const Feeds = () => {
  const dataState = useAppSelector((state) => state.feedSlice);

  const specificDay = useAppSelector((state) => state.specificDaySlice);

  let dummy = [...dataState];
  if (specificDay !== "all") {
    dummy = dummy.filter((ele) => {
      const splitted = ele.posted_on.split(" ")[0];
      return ele.posted_on !== specificDay;
    });
  }

  return (
    <div>
      {dummy.map((ele) => (
        <Link
          style={{ cursor: "pointer" }}
          href={`/detail/${ele.id}`}
          key={ele.id}
        >
          <Flex justifyContent="center">
            <FeedCard id={ele.id} date={ele.posted_on} content={ele.text} />
          </Flex>
        </Link>
      ))}
    </div>
  );
};

export default Feeds;
