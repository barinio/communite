import { Image } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import metodologyImg from "../../images/metodology-img.svg";
import { dataMethodology } from "../../data/methodologyData";

import MethodologyList from "./MethodologyList";

import DefaultLayout from "@/layouts/default";
import ConnectButton from "@/components/ConnectButton";

const OurMethodologyPage = () => {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <div className="main-content w4k:w-full justify-center flex flex-col xl:flex-row items-center gap-6 sm:gap-20 w4k:gap-40">
        <div className="first-part xl:order-2 flex flex-col items-center">
          <h1 className="text-3xl font-extrabold text-center text-[#FDAB0C] mb-2 mt-5 sm:mt-0">
            {t("methodologyTitle")}
          </h1>

          <Image
            alt="Methodology Image"
            width={485}
            className="max-w-lg w-[245px] sm:w-full sm:mb-5"
            src={metodologyImg}
          />
          <p className="hidden text-[#A1A1AA] sm:inline-block sm:w-[390px] lg:w-[504px]">
            {t("methodologyText")}
          </p>

          <ConnectButton btnText="methodologyBtn" classNames="hidden sm:flex" />
        </div>

        <div className="second-part xl:order-1 flex flex-col">
          <ul className="flex flex-col items-center justify-center gap-3  sm:mb-0 ">
            {dataMethodology.map((item) => {
              return <MethodologyList key={item.title} {...item} />;
            })}
          </ul>
        </div>

        <ConnectButton btnText="methodologyBtn" classNames="sm:hidden flex" />
      </div>
    </DefaultLayout>
  );
};

export default OurMethodologyPage;
