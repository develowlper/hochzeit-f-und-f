import { useSession } from "next-auth/react";

export default function useIsLoggedIn() {
  return useSession()?.status === "authenticated";
}
