import Link from "next/link";
import styles from "../page.module.css";

export default function Dashboard() {
  return (
      <div className={styles.grid}>
        <Link
          href="/dashboard/cat-facts"
          className={styles.card}
        >
          <h2>
            Cat Facts <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about cats.</p>
        </Link>

        <Link
          href="/dashboard/green-users"
          className={styles.card}
        >
          <h2>
            Green Users <span>-&gt;</span>
          </h2>
          <p>List of Green Users.</p>
        </Link>

        <Link
          href="/dashboard/purple-users"
          className={styles.card}
        >
          <h2>
            Purple Users <span>-&gt;</span>
          </h2>
          <p>List of Purple Users.</p>
        </Link>
      </div>
  );
};