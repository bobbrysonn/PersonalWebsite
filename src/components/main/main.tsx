import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Main() {
  return (
    <main className={"max-w-[70rem] mb-36 mx-auto px-5 lg:px-7 lg:text-lg"}>
      <div className={`pt-[60px] pb-10 ${playfair.className}`}>
        <h1 className={"font-semibold text-text text-4xl lg:text-5xl"}>
          Welcome
        </h1>
      </div>

      <div className={`pb-10 max-w-[40rem]`}>
        <h3
          className={
            "text-text-light text-xl lg:text-2xl leading-8 lg:leading-9"
          }
        >
          I am a designer with 10+ years of experience in creating clear and
          effective solutions for brands of all sizes.
        </h3>
      </div>
      <div className="pb-8 max-w-[40rem] ">
        <p className={"text-text leading-8"}>
          In 2012, I founded{" "}
          <a
            href=""
            className={
              "text-highlight underline decoration-bg-light decoration-4"
            }
          >
            Designed Space
          </a>{" "}
          where I occasionally write and conduct interviews about creativity and
          design. Since 2020, I&apos;ve been a senior designer at{" "}
          <a
            href=""
            className={
              "text-highlight underline decoration-bg-light decoration-4"
            }
          >
            Orion
          </a>
          , guiding its rebrand in the FinTech market.
        </p>
      </div>
      <div className="pb-8 max-w-[40rem] ">
        <p className="text-text leading-8">
          In addition to design, I am a musician and a sculptor focusing on
          crafting forms from wood. Outside of the internet, you can find me and
          my lovely fiancé, Julia, enjoying our Pennsylvania woodlands with our
          dogs.
        </p>
      </div>
      <figure className={"max-w-[40rem]"}>
        <Image
          alt={"Portrait illustration"}
          className={`rounded-md w-full h-auto`}
          src={"/portrait_illustration.jpg"}
          width={0}
          height={0}
          sizes="100vh"
          priority={true}
        />
        <figcaption className="text-xs pt-1">↑ Myself</figcaption>
      </figure>
    </main>
  );
}
