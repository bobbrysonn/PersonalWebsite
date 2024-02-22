export async function GET(request: Request) {
  /* Obtain the search parameters  */
  const { searchParams } = new URL(request.url);

  /* Check if only the top 5 posts are needed */
  const latest: boolean = Boolean(searchParams.get("latest"));

  /* Get posts */
  const results = latest ? posts.slice(0, 5) : posts;

  return Response.json(results);
}

const posts = [
  {
    id: 1,
    title: "The stillness of snow",
    content: "Something",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: "The art of making many",
    content: "Something",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title: "Internet friendships",
    content: "Something",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    title: "Subscription to Christmas",
    content: "Something",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    title: "On songwriting",
    content: "Something",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 6,
    title: "Jazz improvisation",
    content: "Something",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
