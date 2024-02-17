import Link from "next/link";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={`px-4 ${styles.footer}`}>
      <div className={`max-w-[70rem] mx-auto pt-16 pb-32 ${styles.grid_stuff}`}>
        <Link className={`${styles.about}`} href={"/"}>
          <div>
            <p
              className={
                "hover:text-highlight transiton-colors duration-500 text-2xl text-text"
              }
            >
              Colophon
            </p>
            <p className={"text-sm text-text-dark"}>
              About the site and the author
            </p>
          </div>
        </Link>
        <div className={`${styles.content}`}>
          <p className={"leading-7"}>
            This site is the result of the combined effort of me, Bob Moriasi,
            and my sweet cat{" "}
            <span
              className={
                "hover:text-highlight transiton-colors duration-500 cursor-pointer not-italic text-text"
              }
            >
              Lady Whiskers
            </span>{" "}
            who provided guidance all through it&apos;s development. Whiskers
            takes care of the content while I take care of the website itself.
            You can reach to me at{" "}
            <Link
              className={
                "hover:text-highlight transiton-colors duration-500 not-italic text-text"
              }
              href={"mailto:official.bobmoriasi@gmail.com"}
            >
              official.bobmoriasi@gmail.com.
            </Link>{" "}
            Hosting is provided by{" "}
            <Link
              className={
                "hover:text-highlight transiton-colors duration-500 not-italic text-text"
              }
              href={"https://vercel.com"}
            >
              Vercel,
            </Link>{" "}
            domain by{" "}
            <Link
              className={
                "hover:text-highlight transiton-colors duration-500 not-italic text-text"
              }
              href={"https://domains.google"}
            >
              Google Domains
            </Link>{" "}
            which recently transitioned to{" "}
            <Link
              className={
                "hover:text-highlight transiton-colors duration-500 not-italic text-text"
              }
              href={"https://www.squarespace.com/"}
            >
              Squarespace.
            </Link>{" "}
            Typeface used is{" "}
            <Link
              className={
                "hover:text-highlight transiton-colors duration-500 not-italic text-text"
              }
              href={"https://rsms.me/inter/"}
            >
              Inter
            </Link>{" "}
            by{" "}
            <Link
              className={
                "hover:text-highlight transiton-colors duration-500 not-italic text-text"
              }
              href={"https://rsms.me"}
            >
              Rasmus Andersson.
            </Link>{" "}
            The site is build from the ground up using{" "}
            <Link
              className={
                "hover:text-highlight transiton-colors duration-500 not-italic text-text"
              }
              href={"https://nextjs.org/"}
            >
              NextJs.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
