import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { ReactNode } from "react";

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
          I am a sophomore at Dartmouth currently studying Computer Engineering
          while exploring embedded and web development.
        </h3>
      </div>
      <div className="pb-8 max-w-[40rem] ">
        <p className={"text-text leading-8"}>
          I enjoy diving deep into the intricacies of embedded systems on my{" "}
          <HighLightedLink href="https://digilent.com/reference/programmable-logic/zybo-z7/start">
            Zynq 7000
          </HighLightedLink>{" "}
          board from{" "}
          <HighLightedLink href="https://digilent.com">
            Diligent
          </HighLightedLink>
          , exploring the marriage of hardware and software to build robust and
          efficient solutions. When not tinkering with hardware, I develop
          frontends with{" "}
          <HighLightedLink href="https://nextjs.org">NextJS</HighLightedLink>{" "}
          and backends with{" "}
          <HighLightedLink href="https://www.prisma.io">Prisma</HighLightedLink>{" "}
          &{" "}
          <HighLightedLink href="https://expressjs.com">
            Express
          </HighLightedLink>
          .
        </p>
      </div>
      <div className="pb-8 max-w-[40rem] ">
        <p className="text-text leading-8">
          In addition to software design, I am a musician and artist, currently
          exploring jazz on the tenor saxophone. Outside of the internet, you
          can find me and my lovely cat, Whiskers, hiking in the woods in the
          expansive upper valley.
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

function HighLightedLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={"text-highlight underline decoration-bg-light decoration-4"}
    >
      {children}
    </a>
  );
}
