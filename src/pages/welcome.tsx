import { useTranslation } from "react-i18next";

import DefaultLayout from "@/layouts/default";
import WelcomeImg from "@/images/welcome-img.svg";
import { welcomeDescriptionData } from "@/data/welcomeDescriptionData";
import ConnectButton from "@/components/ConnectButton";

export default function WelcomePage() {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <div className="xl:mb-3 w4k:w-full flex flex-col items-center ">
        <h1 className="w4k:text-5xl mb-5 text-3xl font-extrabold text-[#fdab0c]">
          {t("ourExpertise")}
        </h1>
        <img
          src={WelcomeImg}
          alt="WelcomeImg"
          width={516}
          className="w4k:mt-10 max-w-[400px] w-[245px] sm:w-full"
        />
        <ConnectButton btnText="contactUsBtn" classNames="hidden sm:flex" />
      </div>

      <ul className="w4k:w-full w4k:gap-5 xl:mt-0 mt-10 flex flex-col">
        {welcomeDescriptionData.map(({ title, description }) => (
          <li key={title} className="w4k:max-w-[600px] w-[350px] md:max-w-[407px] md:w-full mb-8">
            <h2 className="w4k:text-xl w4k:mb-2 sm:pl-8 text-center sm:text-left text-base leading-9 text-[#fdab0c] font-extrabold">
              {t(`${title}`)}
            </h2>
            <p className="w4k:text-sm text-[#010101] text-xs leading-[18px] font-extrabold rounded-[45px] px-[37px] py-[30px] bg-gradient-to-r from-[#FBBB17] to-[#C8AD1F]">
              {t(`${description}`)}
            </p>
          </li>
        ))}
      </ul>

      <ConnectButton btnText="contactUsBtn" classNames="sm:hidden flex" />
    </DefaultLayout>
  );
}
