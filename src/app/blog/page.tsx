import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function BlogPage() {
  return (
    <div className={"container text-center mt-40 mx-auto"}>
      <p className={`text-3xl lg:text-5xl text-text  ${playfair.className}`}>
        Blog coming soon
      </p>
    </div>
  );
}
