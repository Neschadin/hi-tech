import { redirect } from "next/navigation";

/** Unknown routes → home (307, not cached as permanent). */
export default function NotFound() {
  redirect("/");
}
