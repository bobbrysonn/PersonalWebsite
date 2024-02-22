import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bob Moriasi - Personal Blog",
  description: "Personal website for Bob Moriasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
