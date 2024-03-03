"use server";

import prisma from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function fetchAllPosts() {
  try {
    // Get all posts
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });

    return posts;
  } catch (error) {
    console.log("Database Error: Failed to fetch latest posts");
    throw new Error("Failed to fetch latest posts");
  }
}

export async function fetchLatestPosts() {
  try {
    // Get the top 5 most recent posts
    const posts = await prisma.post.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
    });

    return posts;
  } catch (error) {
    console.log("Database Error: Failed to fetch latest posts");
    throw new Error("Failed to fetch latest posts");
  }
}

export async function fetchPostByID(id: string) {
  try {
    // Get post by id
    const post = await prisma.post.findUnique({ where: { id: id } });

    return post;
  } catch (error) {
    console.log(`Database Error: Failed to fetch post: ${id}`);
    throw new Error("Failed to fetch specified post");
  }
}

export async function likePostByID(id: string) {
  try {
    const post = await prisma.post.update({
      where: { id },
      data: { likes: { increment: 1 } },
    });

    revalidatePath(`/blog/${id}`);
    return post.likes;
  } catch (error) {
    console.log(`Database Error: Failed to like post: ${id}`);
    console.log(error);
    throw new Error("Failed to like specified post");
  }
}
