import useIsLoggedIn from "hooks";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import Footer from "./footer";
import Forbidden from "./forbidden";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
