"use client";
import { useAppSelector } from "@/redux/store";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import FeedCard from "./FeedCard";

const Feeds = () => {
  const isAuth = useAppSelector((state) => state.authSlice.isAuth);

  const dataState = useAppSelector((state) => state.feedSlice);

  const specificDay = useAppSelector((state) => state.specificDaySlice);

  let filteredData = [...dataState];
  if (specificDay !== "all") {
    filteredData = filteredData.filter((ele) => {
      const date = new Date(ele.posted_on);
      const dayOfWeek = date
        .toLocaleString("en-US", { weekday: "short" })
        .toLowerCase(); // stack overflow how to extract dayOfweek from date
      return dayOfWeek === specificDay;
    });
  }

  return (
    <div>
      {filteredData.map((ele) => (
        <Link
          style={{ cursor: "pointer" }}
          href={isAuth ? `/detail/${ele.id}` : "/login"}
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
