import Link from "next/link";
import styles from "./recentposts.module.css";
import { fetchLatestPosts } from "@/utils/data";

export default async function RecentPosts() {
  const posts = await fetchLatestPosts();

  return (
    <section
      className={`mx-auto mb-36 lg:mb-44 max-w-[70rem] px-5 lg:px-7 lg:text-lg ${styles.recentposts}`}
    >
      <header className={`${styles.header} md:mt-4`}>
        <h2 className={"text-text text-2xl md:text-4xl"}>Recent Posts</h2>
        <small className={"text-text-dark mb-9 block"}>
          Should probably start writing more haha!
        </small>
      </header>
      <div className={`${styles.posts}`}>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
      <footer className={`${styles.footer}`}>
        <Link
          className={`text-text-dark hover:text-text transtion-colors mt-8 block text-sm font-medium uppercase duration-300 ${styles.browsearchive}`}
          href={"/blog"}
        >
          Browse the full archive
        </Link>
      </footer>
    </section>
  );
}

type Post = {
  id: string;
  title: string;
  content: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
};

function Post({ post }: { post: Post }) {
  return (
    <div className={"mt-4 md:mt-6"}>
      <div
        className={
          "grid grid-cols-[auto_1fr_auto] items-baseline gap-x-1 md:gap-x-2"
        }
      >
        <Link
          className={
            "hover:text-highlight text-text text-base transition-all duration-300 md:text-2xl"
          }
          href={`/blog/${post.id}`}
        >
          {post.title}
        </Link>
        <div className={"border-b-bg-light h-4 min-w-4 border-b-2"}></div>
        <p className={"text-text"}>
          {new Date(post.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
