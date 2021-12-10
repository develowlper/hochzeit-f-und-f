import clsx from "clsx";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const routes = [
  { label: "Ankunft", href: "/ankunft" },
  { label: "Getting Ready Franz", href: "/getting-ready-franz" },
  { label: "Getting Ready Franzi", href: "/getting-ready-franzi" },
  { label: "First Look Papa", href: "/first-look-papa" },
  { href: "/vor-der-trauung", label: "Vor der Trauung" },
  { href: "/trauung", label: "Trauung" },
  { href: "/spalier", label: "Spalier" },
  { label: "Gratulations", href: "/gratulations" },
  { href: "/nachmittags", label: "Nachmittags" },
  { href: "/gruppenbilder", label: "Gruppenbilder" },
  { href: "/paarbilder", label: "Paarbilder" },
  { label: "Abends", href: "/abends" },
  { href: "/hochzeitstanz-&-party", label: "Hochzeitstanz & Party" },
  { href: "/video", label: "Video" },
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
