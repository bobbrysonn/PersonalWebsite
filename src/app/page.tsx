import Connect from "@/components/connect/connect";
import EndNote from "@/components/endnote/endnote";
import Footer from "@/components/footer/footer";
import Main from "@/components/main/main";
import RecentPosts from "@/components/recentposts/recentposts";

export default function HomePage() {
  return (
    <>
      <Main />
      <RecentPosts />
      <Connect />
      <Footer />
      <EndNote />
    </>
  );
}
