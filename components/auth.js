import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import Image from "next/image";
import logo from "../public/assets/V1-mit-Logo-1.png";

export default function Auth({ children }) {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  useEffect(() => {
    if (status === "loading") {
      return;
    } // Do nothing while loading
    if (!isUser) {
      signIn();
    } // If not authenticated, force log in
  }, [isUser, status]);

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return (
    <div className="h-screen bg-wedding-light flex items-center justify-center">
      <Image
        className="rounded-full animate-fadeIn animate-rotate"
        src={logo}
      />
    </div>
  );
}
