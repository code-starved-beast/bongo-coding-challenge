import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <div className={styles.grid}>
        <Link
          href="/login"
          className={styles.card}
        >
          <h2>
            Login <span>-&gt;</span>
          </h2>
        </Link>

        <Link
          href="/dashboard"
          className={styles.card}
        >
          <h2>
            Dashboard <span>-&gt;</span>
          </h2>
        </Link>
      </div>
    </>
  );
}
