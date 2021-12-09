import clsx from "clsx";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const routes = [
  { label: "ankunft", href: "/ankunft" },
  { label: "getting-ready-franz", href: "/getting-ready-franz" },
  { label: "getting-ready-franzi", href: "/getting-ready-franzi" },
  { label: "first-look-papa", href: "/first-look-papa" },
  { href: "/vor-der-trauung", label: "vor-der-trauung" },
  { href: "/trauung", label: "trauung" },
  { href: "/spalier", label: "spalier" },
  { label: "gratulations", href: "/gratulations" },
  { href: "/nachmittags", label: "nachmittags" },
  { href: "/gruppenbilder", label: "gruppenbilder" },
  { href: "/paarbilder", label: "paarbilder" },
  { label: "abends", href: "/abends" },
  { href: "/hochzeitstanz-&-party", label: "hochzeitstanz-&-party" },
];

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="p-2 bg-wedding-light">
      <nav id="nav" className="flex justify-between items-baseline">
        <ul className="flex flex-wrap gap-2">
          {routes
            .map((link) => ({ ...link, isActive: router.asPath === link.href }))
            .map(({ href, label, isActive }) => (
              <li
                key={label}
                className={clsx(
                  isActive ? "bg-wedding-dark text-white" : "bg-white",
                  "rounded-lg",
                  "border-2",
                  "border-wedding-dark",
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
