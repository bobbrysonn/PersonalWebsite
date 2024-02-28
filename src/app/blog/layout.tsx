import RecentPosts from "@/components/recentposts/recentposts";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <RecentPosts />
    </>
  );
}
