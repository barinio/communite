import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  Button,
  DropdownItem,
  Link
} from "@nextui-org/react";

import socialDropDownImg from "@/images/social-drop-down.svg";
import logo from "@/images/logo.svg";
import { socialLinkData } from "@/data/socialLinkData";
import { ThemeSwitch } from "@/components/theme-switch";
import SwitcherLanguage from "@/i18n/SwitcherLanguage";

const SwitcherBar = () => {
  return (
    <div className="hidden sm:flex justify-end w-full gap-6 pt-8 md:pt-10">
      <Link className="flex justify-start items-center gap-1" color="foreground" href="/">
        <img src={logo} alt="logo-commUnite" />
      </Link>

      <ThemeSwitch />
      <SwitcherLanguage />

      <Dropdown className="min-w-[55px] w-full p-0 mt-3 bg-transparent">
        <DropdownTrigger>
          <Button
            variant="faded"
            className="px-0 min-w-8 h-9 rounded-none bg-[#1D1D1F] border-[#424245]"
          >
            <img src={socialDropDownImg} alt="social drop down img" width={24} height={9} />
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions" className="flex flex-col">
          {socialLinkData.map(({ key, linkPath, socialImg }) => (
            <DropdownItem
              key={key}
              textValue="social"
              className="bg-content1 mb-2 rounded-full w-[55px] h-[55px] flex justify-center items-center"
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
