import Image from "next/image";
import Link from "next/link";
import Navigation from "./navigation/navigation";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
  return (
    <header
      className={`border-b-[1px] border-b-bg-dark gap-6 grid grid-cols-2 justify-between outline outline-1 outline-bg-light pb-4 lg:pb-9 pt-7 lg:pt-9 px-3 lg:px-6 ${styles.header}`}
    >
      <Link
        className="gap-6 grid grid-cols-[auto_1fr] hover:text-text text-white"
        href={"/"}
      >
        <Image
          width={64}
          height={64}
          className={"block rounded-full min-w-16"}
          src={"/profile_pic.jpg"}
          alt="Profile picture"
          priority={true}
        />
        <div className="flex flex-col justify-center">
          <p className="text-xl sm:text-xl md:text-2xl">Bob Moriasi</p>
          <p className="duration-500 font-medium hover:text-text-light text-text-dark text-xs sm:text-sm transition-all">
            Designer, Saxophonist, Student
          </p>
        </div>
      </Link>

      <Navigation />
    </header>
  );
}
