"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/store";

const useAuthRedirect = (
  redirectPathIfUnauth: string,
  options: string[] | null,
  currentPath: string | null
): boolean | undefined => {
  const userState = useAppSelector((state) => state.authSlice.isAuth);
  const router = useRouter();

  useEffect(() => {
    if (!userState) {
      router.push(redirectPathIfUnauth);
    } else if (options && !options.includes(currentPath || "")) {
      router.push(options[0]);// is wala case ma 'a'
    }
  }, [userState, router, currentPath, options, redirectPathIfUnauth]);

  return userState;
};

export default useAuthRedirect;
