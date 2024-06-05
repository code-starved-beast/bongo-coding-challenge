import { User } from "./users";

interface UserDetailProps {
  user: User;
}

export default function UserDetail({ user }: UserDetailProps) {
  return (
    <>
      <h1>User Detail</h1>
      <dl>
        <dt>Name</dt>
        <dd>{user.name}</dd>
        <dt>Details</dt>
        <dd>{user.details}</dd>
      </dl>
    </>
  );
}
