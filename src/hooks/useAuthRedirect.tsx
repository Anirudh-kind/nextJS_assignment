"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";

const useAuthRedirect = (
  redirectPathIfUnauth: string,
  aboutOptions: string[] | null,
  currentPath: string | null
): boolean | undefined => {
  const userState = useAppSelector((state) => state.authSlice.isAuth);
  const router = useRouter();

  useEffect(() => {
    if (!userState) {
      router.push(redirectPathIfUnauth);
    } else if (aboutOptions && !aboutOptions.includes(currentPath || "")) {
      router.push(aboutOptions[0]); // is wala case ma 'a'
    }
  }, [userState, router, currentPath, aboutOptions, redirectPathIfUnauth]);

  return userState;
};

export default useAuthRedirect;
