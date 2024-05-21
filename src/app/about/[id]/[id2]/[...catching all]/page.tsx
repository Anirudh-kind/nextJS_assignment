"use client";
import React from "react";
import { useRouter } from 'next/navigation'
const CatchALL = () => {
  const route = useRouter();
  const routeToHome = () => {
    route.push("/about/a");
  };
  return (
    <>
      <h1>YOU have entered CatchALL routes</h1>
      <h1>redirecting you to somwhere</h1>
      {routeToHome()}
    </>
  );
};

export default CatchALL;
