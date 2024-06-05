import users from "../users";
import styles from "../dashboard.module.css";

export default async function GreenUsers() {
  return (
    <>
      <h2>Users</h2>
      <ol className={styles.purple}>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </>
  );
};