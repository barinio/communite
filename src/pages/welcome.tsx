import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  Button,
  DropdownItem,
  Link
} from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import DefaultLayout from "@/layouts/default";
import WelcomeImg from "@/images/welcome-img.png";
import socialDropDownImg from "@/images/social-drop-down.svg";
import logo from "@/images/logo.svg";
import { welcomeDescriptionData } from "@/data/welcomeDescriptionData";
import { socialLinkData } from "@/data/socialLinkData";
import { ThemeSwitch } from "@/components/theme-switch";
import SwitcherLanguage from "@/i18n/SwitcherLanguage";

export default function IndexPage() {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 before:content-[''] before:absolute xl:before:w-[750px] before:h-[550px] before:left-[50px] before:top-[-150px] before:rounded-full before:bg-gradient-to-b before:from-[#AC962244] before:to-[#44490600] before:blur-[100px] ">
        <div className="hidden sm:flex justify-end w-full gap-6">
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

        <div className="main-content flex flex-col xl:flex-row items-center sm:pl-12 sm:pr-28 gap-6">
          <div className="fist-part flex flex-col items-center ">
            <h1 className="mb-5 text-3xl font-extrabold text-[#fdab0c]">{t("ourExpertise")}</h1>
            <img
              src={WelcomeImg}
              alt="WelcomeImg"
              width={516}
              className="max-w-lg w-[245px] sm:w-full"
            />
            <Button
              radius="full"
              className="hidden sm:flex mt-16 h-[66px] w-[273px] italic text-2xl font-extrabold text-[#1F1D15] bg-gradient-to-r from-[#FBBB17] to-[#C8AD1F]"
            >
              {t("contactUsBtn")}
            </Button>
          </div>

          <div className="second-part flex flex-col">
            {welcomeDescriptionData.map(({ title, description }) => (
              <div key={title} className="w-[393px] sm:max-w-[407px] sm:w-full mb-8">
                <h2 className="sm:pl-8 text-center sm:text-left text-base leading-9 text-[#fdab0c] font-extrabold">
                  {t(`${title}`)}
                </h2>
                <p className="text-[#010101] text-xs leading-[18px] font-extrabold rounded-[45px] px-[37px] py-[30px] bg-gradient-to-r from-[#FBBB17] to-[#C8AD1F]">
                  {t(`${description}`)}
                </p>
              </div>
            ))}
          </div>

          <Button
            radius="full"
            className="sm:hidden flex justify-center mt-10 h-[66px] w-[273px] italic text-2xl font-extrabold text-[#1F1D15] bg-gradient-to-r from-[#FBBB17] to-[#C8AD1F]"
          >
            {t("contactUsBtn")}
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
