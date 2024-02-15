import Link from "next/link";
import styles from "./recentposts.module.css";

export default function RecentPosts() {
  return (
    <section
      className={`max-w-[70rem] mx-auto mb-36 px-5 lg:px-7 lg:text-lg ${styles.recentposts}`}
    >
      <header className={`${styles.header}`}>
        <h2 className={"text-2xl md:text-4xl text-text"}>Recent Posts</h2>
        <small className={"block mb-9"}>
          Should probably start writing more haha
        </small>
      </header>
      <div className={`${styles.posts}`}>
        <div className={"mt-2"}>
          <div
            className={
              "gap-x-1 md:gap-x-2 grid grid-cols-[auto_1fr_auto] items-baseline"
            }
          >
            <Link
              className={
                "duration-300 hover:text-highlight text-base md:text-2xl text-text transition-all"
              }
              href={"/"}
            >
              The stillness of snow
            </Link>
            <div className={"border-b-2 border-b-bg-light min-w-4 h-4"}></div>
            <p className={"italic text-text"}>Jan 25, 2024</p>
          </div>
        </div>
        <div className={"mt-4 md:mt-6"}>
          <div
            className={
              "gap-x-1 md:gap-x-2 grid grid-cols-[auto_1fr_auto] items-baseline"
            }
          >
            <Link
              className={
                "duration-300 hover:text-highlight text-base md:text-2xl text-text transition-all"
              }
              href={"/"}
            >
              The art of making many
            </Link>
            <div className={"border-b-2 border-b-bg-light min-w-4 h-4"}></div>
            <p className={"italic text-text"}>Jan 25, 2024</p>
          </div>
        </div>
        <div className={"mt-4 md:mt-6"}>
          <div
            className={
              "gap-x-1 md:gap-x-2 grid grid-cols-[auto_1fr_auto] items-baseline"
            }
          >
            <Link
              className={
                "duration-300 hover:text-highlight text-base md:text-2xl text-text transition-all"
              }
              href={"/"}
            >
              Internet friendships
            </Link>
            <div className={"border-b-2 border-b-bg-light min-w-4 h-4"}></div>
            <p className={"italic text-text"}>Jan 25, 2024</p>
          </div>
        </div>
        <div className={"mt-4 md:mt-6"}>
          <div
            className={
              "gap-x-1 md:gap-x-2 grid grid-cols-[auto_1fr_auto] items-baseline"
            }
          >
            <Link
              className={
                "duration-300 hover:text-highlight text-base md:text-2xl text-text transition-all"
              }
              href={"/"}
            >
              Subscription to Christmas
            </Link>
            <div className={"border-b-2 border-b-bg-light min-w-4 h-4"}></div>
            <p className={"italic text-text"}>Jan 25, 2024</p>
          </div>
        </div>
        <div className={"mt-4 md:mt-6"}>
          <div
            className={
              "gap-x-1 md:gap-x-2 grid grid-cols-[auto_1fr_auto] items-baseline"
            }
          >
            <Link
              className={
                "duration-300 hover:text-highlight text-base md:text-2xl text-text transition-all"
              }
              href={"/"}
            >
              On songwriting
            </Link>
            <div className={"border-b-2 border-b-bg-light min-w-4 h-4"}></div>
            <p className={"italic text-text"}>Jan 25, 2024</p>
          </div>
        </div>
      </div>
      <footer className={`${styles.footer}`}>
        <Link
          className={`block duration-300 font-medium mt-8 text-sm text-text-dark hover:text-text transtion-colors uppercase ${styles.browsearchive}`}
          href={"/blog"}
        >
          Browse the full archive
        </Link>
      </footer>
    </section>
  );
}
