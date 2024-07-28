import { Button, Image } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import metodologyImg from "../images/advantages-of-comuniti.svg";
import { advantagesComunitData } from "../data/advantagesOfComData";

import DefaultLayout from "@/layouts/default";

export default function AdvantagesOfCoMUnitiPage() {
  const { t } = useTranslation();

  const handleClick = () => {
    // console.log("Click button method");
  };

  return (
    <DefaultLayout>
      {/* <div className="main-content w4k:w-full w4k:h-full flex flex-col items-center"> */}
      {/* <div className="w4k:w-full w4k:h-full flex flex-col items-center"> */}
      <div className="first-part flex flex-col items-center w4k:mr-24 ">
        <h1 className="text-3xl font-extrabold text-center text-[#FDAB0C] mb-8 mt-5 sm:mt-0">
          {t("advantagesCommunitiTitle")}
        </h1>

        <div className="relative inline-block">
          <Image
            alt="Advantages of Communiti"
            width={485}
            className="max-w-lg w-[245px] sm:w-[385px] lg:w-[485px] "
            src={metodologyImg}
          />
          <p className="absolute top-[85px] left-[72px] sm:top-[145px] sm:left-[105px] lg:top-[175px] lg:left-[130px] w-28 z-10 text-[#A1A1AA] text-base sm:text-[28px] lg:text-4xl font-bold ">
            Advantages CommUnite
          </p>
        </div>

        <Button
          className="hidden sm:flex mt-16 h-[66px] w-[273px] italic text-2xl font-extrabold text-[#1F1D15] bg-gradient-to-r from-[#FBBB17] to-[#C8AD1F]"
          onPress={handleClick}
          type="button"
          radius="full"
        >
          {t("methodologyBtn")}
        </Button>
      </div>

      <div className="second-part flex flex-col">
        <ul className="flex flex-col items-center justify-center gap-3 sm:w-[400px] md:w-[470px]  w4k:w-[600px] sm:mb-0 sm:mt-3">
          {advantagesComunitData.map(({ id, icon, text }) => {
            return (
              <li key={id} className="flex items-center gap-6 ">
                <Image
                  alt="Advantages of Communiti"
                  width={485}
                  className="max-w-lg w-10 "
                  src={icon}
                />
                <p className="p-2 text-xs w4k:text-sm font-bold text-[#A1A1AA] ">
                  {t(`${text}`)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <Button
        radius="full"
        className="sm:hidden flex justify-center mt-10 h-[66px] w-[273px] italic text-2xl font-extrabold text-[#1F1D15] bg-gradient-to-r from-[#FBBB17] to-[#C8AD1F]"
      >
        {t("methodologyBtn")}
      </Button>
      {/* </div> */}
    </DefaultLayout>
  );
}
