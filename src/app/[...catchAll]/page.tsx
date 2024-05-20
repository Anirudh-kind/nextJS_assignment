"use client";
import React from "react";
import { useRouter } from 'next/navigation'
const CatchALL = () => {
  const route = useRouter();
  const routeToHome = () => {
    route.push("/");
  };
  return (
    <>
      <h1>YOU have entered CatchALl routes</h1>
      <h1>redirecting you to somwhere</h1>
      {routeToHome()}
    </>
  );
};

export default CatchALL;
