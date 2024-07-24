import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  Button,
  DropdownItem,
  Link
} from "@nextui-org/react";

import lightIconDropDown from "@/images/light-icon-drop-down.svg";
import darkIconDropDown from "@/images/dark-icon-drop-down.svg";
import logoDark from "@/images/logo-dark.svg";
import logoLight from "@/images/logo-light.svg";
import { socialLinkData } from "@/data/socialLinkData";
import { ThemeSwitch } from "@/components/theme-switch";
import SwitcherLanguage from "@/i18n/SwitcherLanguage";
import useDarkMode from "@/hooks/useDarkMode";

const SwitcherBar = () => {
  const isDark = useDarkMode();

  return (
    <div className="hidden sm:flex justify-end w-[390px] md:w-full gap-6 pr-5 pt-8 md:pt-10">
      <Link className="flex justify-start items-center gap-1" color="foreground" href="/">
        <img src={isDark ? logoDark : logoLight} alt="logo-commUnite" />
      </Link>

      <ThemeSwitch />
      <SwitcherLanguage />

      <Dropdown className="min-w-[55px] w-full p-0 mt-3 dark:bg-transparent shadow-none">
        <DropdownTrigger>
          <Button
            variant="faded"
            className="px-0 min-w-8 h-9 rounded-none dark:bg-[#1D1D1F] dark:border-[#424245]"
          >
            <img
              src={isDark ? darkIconDropDown : lightIconDropDown}
              alt="social drop down img"
              width={24}
              height={9}
            />
          </Button>
        </DropdownTrigger>

        <DropdownMenu aria-label="Static Actions" className="flex flex-col">
          {socialLinkData.map(({ key, linkPath, socialImg }) => (
            <DropdownItem
              key={key}
              textValue="social"
              className="dark:bg-content1 bg-[#212121] mb-2 rounded-full w-[55px] h-[55px] flex justify-center items-center"
            >
              <Link isExternal href={linkPath} className="flex justify-center items-center">
                <img src={socialImg} alt={key} width={30} />
              </Link>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default SwitcherBar;
