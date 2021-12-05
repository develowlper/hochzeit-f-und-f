import clsx from "clsx";
import { signOut } from "next-auth/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect } from "react";

const routes = [
  { label: "home", href: "/" },
  { label: "abends", href: "/abends" },
  { label: "ankunft", href: "/ankunft" },
  { label: "first-look-papa", href: "/first-look-papa" },
  { label: "getting-ready-franz", href: "/getting-ready-franz" },
  { label: "getting-ready-franzi", href: "/getting-ready-franzi" },
  { label: "gratulations", href: "/gratulations" },
  { href: "/gruppenbilder", label: "gruppenbilder" },
  { href: "/hochzeitstanz-&-party", label: "hochzeitstanz-&-party" },
  { href: "/nachmittags", label: "nachmittags" },
  { href: "/paarbilder", label: "paarbilder" },
  { href: "/spalier", label: "spalier" },
  { href: "/trauung", label: "trauung" },
  { href: "/vor-der-trauung", label: "vor-der-trauung" },
];

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <header className="p-2 bg-gray-100">
      <nav className="flex justify-between items-baseline">
        <ul className="flex flex-wrap gap-2">
          {routes
            .map((link) => ({ ...link, isActive: router.asPath === link.href }))
            .map(({ href, label, isActive }) => (
              <li
                key={label}
                className={clsx(
                  isActive ? "bg-green-300" : "bg-white",
                  "border-2",
                  "border-green-300",
                  "py-1",
                  "px-2",
                  "transition"
                )}
              >
                <Link href={href}>
                  <a>{label}</a>
                </Link>
              </li>
            ))}
        </ul>
        {/* <button
          onClick={() => signOut()}
          className="bg-white border-2 border-yellow-300 py-1 px-2"
        >
          signout
        </button> */}
      </nav>
    </header>
  );
}
