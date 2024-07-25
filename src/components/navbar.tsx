import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link
} from "@nextui-org/react";
import { link as linkStyles } from "@nextui-org/theme";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

import ButtonDropOpen from "./buttonDropOpen";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <NextUINavbar
      maxWidth="sm"
      // backdrop-blur-none
      className="w-auto md:w-full bg-background-transparent md:max-w-80 max-h-screen [&>header]:p-0 [&>header]:h-full sm:sticky absolute "
      classNames={{
        item: [
          "data-[active=true]:text-primary",
          "data-[active=true]:font-medium",
          "data-[active=true]:text-[#7B765E]"
        ]
      }}
      position="sticky"
    >
      <NavbarContent className="max-w-[258px] sticky top-0 " justify="start">
        <div className="hidden sm:flex flex-col max-h-screen h-full border-r-1 border-r-[#1D1E234D] sticky top-0">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              className={clsx(
                "hover:bg-[#7B765E12] flex-1 flex [&:not(:last-child)]:border-b-1 border-[#20272C] justify-center w-full px-3 md:px-6",
                location.pathname === item.href &&
                  "bg-[#7B765E12] shadow-[inset_2px_6px_4px_0px_#00000040]"
              )}
            >
              <Link
                href={item.href}
                className={clsx(linkStyles({ color: "foreground" }), "text-zinc-400")}
              >
                {t(item.label)}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <div className="sm:hidden">
        <NavbarMenuToggle className="w-6 h-6 absolute top-6 right-6" icon={<ButtonDropOpen />} />
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
                className={clsx(
                  "flex-1 flex bg-[#09090B] [&:not(:last-child)]:border-b-1 border-[#20272C] justify-center w-full",
                  location.pathname === item.href &&
                    "bg-[#7B765E12] shadow-[inset_2px_6px_4px_0px_#00000040]"
                )}
              >
                <Link
                  className={clsx(
                    "text-zinc-400 data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  href={item.href}
                >
                  {t(`${item.label}`)}
                </Link>
              </NavbarItem>
            ))}

            <NavbarItem className="flex-1 flex [&:not(:last-child)]:border-b-1 bg-[#09090B] border-[#20272C] justify-center w-full">
              <Link
                className="flex flex-1 justify-center items-center gap-1 text-current sm:mr-20 "
                href="/privacy-policy"
              >
                <p className="text-zinc-400 opacity-50 text-xl">{t("privacyPolicy")}</p>
              </Link>
            </NavbarItem>

            <Link
              className="flex flex-1 justify-center items-center gap-1 text-current bg-[#09090B]"
              underline="always"
              href="/privacy-information"
            >
              <p className="w-[292px] text-center leading-8 uppercase text-zinc-400 opacity-50 sm:text-xl">
                {t("informationOnPersonalDataProtection")}
              </p>
            </Link>
          </div>
        </NavbarContent>
      </NavbarMenu>
    </NextUINavbar>
  );
};
