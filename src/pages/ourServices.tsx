import { useTranslation } from "react-i18next";

import DefaultLayout from "@/layouts/default";
import serviceImg from "@/images/service-img.svg";
import serviceMobImg from "@/images/service-mob-img.png";
import itemBgImg from "@/images/bg-service-item.png";
import { ourServicesData } from "@/data/ourServicesData";
import ConnectButton from "@/components/ConnectButton";

export default function OurServicesPage() {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <div className="w4k:w-full w4k:h-full flex flex-col items-center">
        <div className="w4k:max-w-[670px] sm:mb-10 w4k:w-full w4k:px-5 flex flex-col justify-center sm:flex-row relative">
          <h1 className="sm:absolute justify-center items-center w-full h-full flex text-2xl md:text-3xl font-extrabold italic mb-10 text-[#FDAB0C] sm:text-[#1F1D15]">
            {t("serviceTitle")}
          </h1>

          <img
            src={serviceMobImg}
            alt="Service"
            width={210}
            className="sm:hidden flex w-full max-w-[210px] h-full max-h-[190px]"
          />
          <img
            src={serviceImg}
            alt="Service"
            width={350}
            className=" hidden sm:flex w-full max-w-[417px] h-full max-h-[350px]"
          />
        </div>

        <ConnectButton btnText="btnConnectWithUs" classNames="hidden sm:flex" />
      </div>

      <ul className="w4k:w-full w4k:my-0 mt-14 lg:mt-5 sm:mb-8 w4k:pl-0 flex flex-col gap-14 pl-12">
        {ourServicesData.map(({ icon, text }) => (
          <li
            key={text}
            style={{ backgroundImage: `url(${itemBgImg})` }}
            className="w4k:pl-[125px] w4k:py-10 w4k:min-w-[555px] w4k:h-[100px] w4k:w-full w4k:bg-[length:100%_100%] relative flex items-center pl-16 md:pl-32 gap-3 max-w-[390px] w-full md:max-w-[450px] md:w-[438px] h-[100px] bg-right bg-no-repeat"
          >
            <img
              src={icon}
              alt={text}
              className="w4k:left-[-15px] absolute w-[110px] h-[130px] md:w-fit right-[270px] md:right-[320px]"
            />

            <p className="w4k:max-w-[500px] w4k:text-sm text-start font-semibold text-[13px] max-w-96 md:max-w-80 w-full leading-none text-[#1F1D15] pr-10 md:pr-14">
              {t(`${text}`)}
            </p>
          </li>
        ))}
      </ul>

      <ConnectButton btnText="btnConnectWithUs" classNames="sm:hidden flex" />
    </DefaultLayout>
  );
}
