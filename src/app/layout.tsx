import Sidebar from "@/components/sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Body from "@/components/body";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Algorithms",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex base-layout">
          <Sidebar />
          <div className="flex-1 flex">
            <Body>{children}</Body>
          </div>
        </main>
      </body>
    </html>
  );
}
