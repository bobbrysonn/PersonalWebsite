import Connect from "@/components/connect/connect";
import Main from "@/components/main/main";
import RecentPosts from "@/components/recentposts/recentposts";

export default function HomePage() {
  return (
    <>
      <Main />
      <RecentPosts />
      <Connect />
    </>
  );
}
