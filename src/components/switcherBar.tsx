import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  Button,
  DropdownItem,
  Link,
  Navbar
} from "@nextui-org/react";

import lightIconDropDown from "@/images/light-icon-drop-down.svg";
import darkIconDropDown from "@/images/dark-icon-drop-down.svg";
import logoDark from "@/images/logo-dark.svg";
import logoLight from "@/images/logo-light.svg";
import { ThemeSwitch } from "@/components/theme-switch";
import SwitcherLanguage from "@/i18n/SwitcherLanguage";
import useDarkMode from "@/hooks/useDarkMode";
import { siteConfig } from "@/config/site";

const SwitcherBar = () => {
  const isDark = useDarkMode();

  return (
    <Navbar
      shouldHideOnScroll
      className="backdrop-saturate-100 [&>header]:w4k:gap-8 [&>header]:p-0 [&>header]:w4k:h-[120px] hidden sm:flex justify-end w-full gap-6 pr-5 md:bg-transparent [&>header]:justify-end"
    >
      <Link className="flex justify-start items-center gap-1" color="foreground" href="/">
        <img src={isDark ? logoDark : logoLight} alt="logo-commUnite" className="w4k:h-[40px]" />
      </Link>

      <ThemeSwitch />
      <SwitcherLanguage />

      <Dropdown className="min-w-[55px] w-full p-0 mt-3 bg-transparent shadow-none">
        <DropdownTrigger>
          <Button
            variant="faded"
            className="w4k:h-[40px] w4k:w-[40px] px-0 min-w-8 h-9 rounded-none dark:bg-[#1D1D1F] dark:border-[#424245]"
          >
            <img
              src={isDark ? darkIconDropDown : lightIconDropDown}
              alt="social drop down img"
              width={24}
              height={9}
            />
          </Button>
        </DropdownTrigger>

        <DropdownMenu aria-label="Static Actions" className="flex flex-col ">
          {siteConfig.links.map(({ key, linkPath, socialImg }) => (
            <DropdownItem
              key={key}
              textValue="social"
              className="w4k:h-[70px] w4k:w-[70px] dark:bg-content1 bg-[#212121] mb-2 rounded-full w-[55px] h-[55px] flex justify-center items-center"
            >
              <Link isExternal href={linkPath} className="flex justify-center items-center">
                <img src={socialImg} alt={key} width={30} className="w4k:h-[40px] w4k:w-[40px]" />
              </Link>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </Navbar>
  );
};

export default SwitcherBar;
