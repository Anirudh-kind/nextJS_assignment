"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthRedirect from "@/hooks/useAuthRedirect";

const AboutPage: React.FC = () => {
  const userState = useAuthRedirect("/login", null, null);
  const router = useRouter();

  useEffect(() => {
    if (userState) {
      router.push("/about/a");
    }
  }, [userState, router]);

  if (!userState) {
    return (
      <div>
        <h1>You have entered a protected route, login first</h1>
        <h1>Redirecting you to somewhere</h1>
      </div>
    );
  }

  return <div>Redirecting you to /about/a</div>;
};

export default AboutPage;
