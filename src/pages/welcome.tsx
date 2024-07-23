import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import DefaultLayout from "@/layouts/default";
import WelcomeImg from "@/images/welcome-img.png";
import { welcomeDescriptionData } from "@/data/welcomeDescriptionData";

export default function IndexPage() {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
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
