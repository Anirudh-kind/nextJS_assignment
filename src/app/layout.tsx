import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import SimpleSidebar from "@/components/sidebar/page";
import { Flex } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Flex>
          <SimpleSidebar />
          <Providers>{children}</Providers>
        </Flex>
      </body>
    </html>
  );
}
