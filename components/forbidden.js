import { signIn } from "next-auth/react";
import { Button } from "./buttons";

export default function Forbidden() {
  return (
    <div className="h-screen grid place-items-center p-4 animate-fadeIn">
      <div className="flex flex-col gap-3">
        <p>
          Um die Bilder zu sehen, beötigst du ein Passwort. Das Passwort findest
          du auf der Karte, die du von F&F erhalten hast.
        </p>
        <Button className="w-full" onClick={() => signIn()}>
          Passwort eingeben
        </Button>
      </div>
    </div>
  );
}
