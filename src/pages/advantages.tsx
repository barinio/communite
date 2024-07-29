import { Image } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import metodologyImg from "../images/advantages.svg";
import { advantagesData } from "../data/advantagesData";

import DefaultLayout from "@/layouts/default";
import ConnectButton from "@/components/ConnectButton";

export default function Advantages() {
  const { t } = useTranslation();

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

        <ConnectButton btnText="methodologyBtn" classNames="hidden sm:flex" />
      </div>

      <div className="second-part flex flex-col">
        <ul className="flex flex-col items-center justify-center gap-3 sm:w-[400px] md:w-[470px]  w4k:w-[600px] sm:mb-0 sm:mt-3">
          {advantagesData.map(({ id, icon, text }) => {
            return (
              <li key={id} className="flex items-center gap-6 ">
                <Image
                  alt="Advantages of Communiti"
                  width={485}
                  className="max-w-lg w-10 "
                  src={icon}
                />
                <p className="p-2 text-xs w4k:text-sm font-bold text-[#A1A1AA] ">{t(`${text}`)}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <ConnectButton btnText="methodologyBtn" classNames="sm:hidden flex" />

      {/* </div> */}
    </DefaultLayout>
  );
}
