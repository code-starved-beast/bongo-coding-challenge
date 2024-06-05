"use client";

import Link from "next/link";
import styles from "../page.module.css";
import Cookies from "js-cookie";

export default function LoginPage() {
  async function login() {
    Cookies.set("auth_token", "123tokentokentoken456");
    window.alert("Congrats, you're logged in!");
    window.location.href = "/";
  }

  return (
    <div className={styles.center}>
      <div className={styles.grid}>
        <Link
          href="#"
          className={styles.card}
          onClick={login}
        >
          <h2>Log In</h2>
        </Link>
      </div>
    </div>
  )
}