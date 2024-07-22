import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
} from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";

import ButtonDropOpen from "./buttonDropOpen";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  return (
    <NextUINavbar
      maxWidth="sm"
      className="backdrop-blur-none bg-background-transparent sm:w-80 max-h-screen [&>header]:p-0 [&>header]:h-full flex-grow sm:relative absolute "
      position="sticky"
    >
      <NavbarContent
        className="max-w-[258px] max-h-screen h-full"
        justify="start"
      >
        <div className="hidden sm:flex flex-col max-h-screen h-full border-r-1 border-r-[#1D1E234D]">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              className="flex-1 flex [&:not(:last-child)]:border-b-1 border-[#20272C] justify-center w-full px-6"
            >
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <div className="sm:hidden">
        <NavbarMenuToggle
          className="w-6 h-6 absolute top-6 right-6"
          icon={<ButtonDropOpen />}
        />
      </div>

      <NavbarMenu
        className="min-h-screen p-0 bg-black "
        style={{ ["--navbar-height" as string]: "0" }}
      >
        <NavbarContent className="w-full max-h-screen h-full" justify="start">
          <div className="w-full flex flex-col max-h-screen h-full">
            {siteConfig.navItems.map((item) => (
              <NavbarItem
                key={item.href}
                className="flex-1 flex [&:not(:last-child)]:border-b-1 border-[#20272C] justify-center w-full"
              >
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </NavbarItem>
            ))}

            <NavbarItem className="flex-1 flex [&:not(:last-child)]:border-b-1 border-[#20272C] justify-center w-full">
              <Link
                className="flex flex-1 justify-center items-center gap-1 text-current sm:mr-20 "
                href=""
              >
                <p className="text-zinc-400 opacity-50 text-xl">
                  Politique de confidentialité
                </p>
              </Link>
            </NavbarItem>

            <Link
              className="flex flex-1 justify-center items-center gap-1 text-current"
              underline="always"
              href=""
            >
              <p className="w-[292px] leading-8 uppercase text-zinc-400 opacity-50 sm:text-xl">
                Information sur la protection des renseignements personnels
              </p>
            </Link>
          </div>
        </NavbarContent>
      </NavbarMenu>
    </NextUINavbar>
  );
};
