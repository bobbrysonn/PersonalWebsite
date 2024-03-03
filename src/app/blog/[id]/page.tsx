import { fetchPostByID } from "@/utils/data";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import LikeButton, { LikeButtonLink } from "@/components/likebutton/likebutton";
import { ReactNode } from "react";
import { validateRequest } from "@/utils/lucia";

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = (await fetchPostByID(params.id))!;
  const { user } = await validateRequest();

  return (
    <main className={"mx-auto mb-36 max-w-[70rem] px-5 lg:px-7 lg:text-lg"}>
      <div className={"mt-16"}>
        <p className={"py-3"}>
          {post.createdAt.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </p>
        <h1 className={"text-text mb-12 text-3xl lg:text-5xl font-semibold"}>
          {post.title}
        </h1>
      </div>

      {/* Introduction section */}
      <section className={"max-w-[40rem]"}>
        <p className={"md:text-2xl"}>{post.intro}</p>
      </section>

      {/* Content section */}
      <MDXRemote
        source={post.content}
        components={{ Paragraph: Paragraph, Picture: Picture }}
      />

      {/* Likes section */}
      <section className={"max-w-[40rem] mt-12"}>
        {!!user ? (
          <LikeButton id={post.id} initialLikes={post.likes} />
        ) : (
          <LikeButtonLink likes={post.likes} />
        )}
      </section>
    </main>
  );
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <div className={"mt-8"}>
      <div className={"text-text max-w-[40rem] leading-8"}>{children}</div>
    </div>
  );
}

function Picture({ url, caption }: { url: string; caption: string }) {
  return (
    <figure className={"max-w-[40rem]"}>
      <Image
        alt={"Bird"}
        className={`h-auto w-full rounded-md`}
        src={url}
        width={0}
        height={0}
        sizes="100vh"
        priority={true}
      />
      <figcaption className="text-text-light pt-1 text-sm">
        {caption}
      </figcaption>
    </figure>
  );
}
