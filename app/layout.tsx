import { Outfit } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import type React from "react";
import "./globals.css";
import { EdgeStoreProvider } from "@/lib/edgestore";
import BackToTopButton from "@/components/back-button";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata = {
  title: "Secure Motorcycle Companion Dashboard",
  description: "Dashboard for the Secure Motorcycle Companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} font-sans antialiased`}>
        {/* Next.js Top Loader */}
        <NextTopLoader color={"#3971ED"} zIndex={9999} />
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
        <BackToTopButton />
        <Toaster />
      </body>
    </html>
  );
}
