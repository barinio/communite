import React from "react";
import { Link } from "@nextui-org/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto max-w-7xl px-6 flex-grow flex">
      <Navbar />

      <div className="relative flex flex-col h-screen flex-grow">
        <main className="flex-grow">{children}</main>

        <footer className="w-full flex items-center justify-center py-3">
          <Link isExternal className="flex items-center gap-1 text-current mr-20 " href="">
            <p className="text-zinc-400 opacity-50">Politique de confidentialité</p>
          </Link>
          <Link
            isExternal
            className="flex items-center gap-1 text-current"
            underline="always"
            href=""
          >
            <p className="Suppercase uppercase text-zinc-400 opacity-50">
              Information sur la protection des renseignements personnels
            </p>
          </Link>
        </footer>
      </div>
    </div>
  );
}
