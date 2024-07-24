import { useTranslation } from "react-i18next";

import DefaultLayout from "@/layouts/default";
import WelcomeImg from "@/images/welcome-img.png";
import { welcomeDescriptionData } from "@/data/welcomeDescriptionData";
import ConnectButton from "@/components/ConnectButton";

export default function IndexPage() {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <section className="w-[390px] md:w-auto flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
        <div className="flex flex-col xl:flex-row items-center pl-5 md:pl-12 pr-5 md:pr-28 gap-6">
          <div className="fist-part flex flex-col items-center ">
            <h1 className="mb-5 text-3xl font-extrabold text-[#fdab0c]">{t("ourExpertise")}</h1>
            <img
              src={WelcomeImg}
              alt="WelcomeImg"
              width={516}
              className="max-w-lg w-[245px] sm:w-full"
            />
            <ConnectButton btnText="contactUsBtn" classNames="hidden sm:flex" />
          </div>

          <div className="second-part flex flex-col">
            {welcomeDescriptionData.map(({ title, description }) => (
              <div key={title} className="w-[350px] md:max-w-[407px] md:w-full mb-8">
                <h2 className="sm:pl-8 text-center sm:text-left text-base leading-9 text-[#fdab0c] font-extrabold">
                  {t(`${title}`)}
                </h2>
                <p className="text-[#010101] text-xs leading-[18px] font-extrabold rounded-[45px] px-[37px] py-[30px] bg-gradient-to-r from-[#FBBB17] to-[#C8AD1F]">
                  {t(`${description}`)}
                </p>
              </div>
            ))}
          </div>

          <ConnectButton btnText="contactUsBtn" classNames="sm:hidden flex" />
        </div>
      </section>
    </DefaultLayout>
  );
}
