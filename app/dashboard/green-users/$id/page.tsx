import { useRouter } from "next/router";
import UserDetail from "@/dashboard/userDetail";
import users from "../../users";

export default function UserDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const user = users[Number(id)];

  return <UserDetail user={user} />
}