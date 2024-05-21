"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";

const AboutPage = () => {
  const userState = useAppSelector((state) => state.authSlice.isAuth);
  const router = useRouter();

  useEffect(() => {
    console.log(userState);
    if (!userState) {
      router.push("/login");
    } else {
      router.push("/about/a");
    }
  }, [userState, router]);

  return (
    <div>
      {!userState && (
        <>
          <h1>You have entered a protected route, login first</h1>
          <h1>Redirecting you to somewhere</h1>
        </>
      )}
    </div>
  );
};

export default AboutPage;
