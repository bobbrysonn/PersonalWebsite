import styles from "./endnote.module.css";

export default function EndNote() {
  return (
    <div className={`flex justify-between px-6 py-8 ${styles.endnote}`}>
      <p className={"font-medium opacity-30 text-xs uppercase text-text-dark"}>
        Tended in Hanover
      </p>
      <p className={"font-medium opacity-30 text-xs uppercase text-text-dark"}>
        Made in Kenya
      </p>
    </div>
  );
}
