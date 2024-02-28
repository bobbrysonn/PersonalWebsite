import { DirectionAwareHover } from "@/components/directionawarehover/directionawarehover";
import Link from "next/link";
import { fetchAllPosts } from "@/utils/data";

export default async function BlogsPage() {
  const posts = await fetchAllPosts();

  return (
    <main className={"max-w-[70rem] mb-36 mx-auto px-5 lg:px-7 lg:text-lg"}>
      {/* Heading */}
      <div className={"mt-16 mb-4"}>
        <h1 className={`font-semibold text-3xl text-text`}>
          Musings and Ramblings
        </h1>
        <p>A collection of all the things I have written</p>
      </div>

      {/* Posts */}
      <div className="relative grid grid-cols-1 xl:grid-cols-2 gap-10 mt-10">
        {posts.map((post, idx) => {
          return (
            <div key={idx}>
              <DirectionAwareHover imageUrl={post.bannerURL}>
                <Link
                  href={`/blog/${post.id}`}
                  className="font-bold text-xl hover:text-highlight transition-colors duration-300"
                >
                  {post.title}
                </Link>
                <p className="font-normal text-sm pt-2">{post.bannerText}</p>
              </DirectionAwareHover>
              <Link
                href={`/blog/${post.id}`}
                className="text-text-light pt-1 text-sm ml-1 hover:text-highlight transition-colors duration-300"
              >
                ↑ {post.title}
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}
