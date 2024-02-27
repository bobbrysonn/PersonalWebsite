import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bobbrysonn.dev"),
  title: "Bob Moriasi - Personal Blog",
  description: "Personal website for Bob Moriasi",
  applicationName: "Bob Moriasi Personal Blog",
  authors: [{ name: "Bob Moriasi", url: "https://bobbrysonn.dev" }],
  keywords: [
    "Bob",
    "Moriasi",
    "Bryson",
    "personal",
    "blog",
    "student",
    "portfolio",
  ],
  creator: "Bob Moriasi",
  icons: [
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png", sizes: "180x180" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    { rel: "manifest", url: "/site.webmanifest" },
  ],
  openGraph: {
    type: "website",
    url: "https://bobbrysonn.dev",
    title: "Bob Moriasi - Personal Website",
    description: "Personal website for Bob Moriasi",
    siteName: "Bob Moriasi - Personal Website",
  },
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
