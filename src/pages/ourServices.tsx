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
        <div className="w4k:max-w-[670px] sm:mb-10 w4k:w-full w4k:pr-10 flex flex-col justify-center sm:flex-row relative">
          <h1 className="w4k:text-5xl sm:absolute justify-center items-center w-full h-full flex text-2xl xl:text-[21px] desktop:text-3xl md:text-3xl font-extrabold italic mb-10 text-[#FDAB0C] sm:text-[#1F1D15]">
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
            className="w4k:max-w-full w4k:w-full w4k:h-full w4k:max-h-full hidden sm:flex w-full max-w-[417px] h-full max-h-[373px]"
          />
        </div>

        <ConnectButton btnText="btnConnectWithUs" classNames="hidden sm:flex" />
      </div>

      <ul className="w4k:w-auto w4k2:w-full my-14 w4k:pl-0 w4k:gap-32 flex flex-col gap-[76px] pl-12">
        {ourServicesData.map(({ icon, text }) => (
          <li
            key={text}
            style={{ backgroundImage: `url(${itemBgImg})` }}
            className="w4k2:pl-40 w4k2:py-10 w4k2:min-w-[675px] w4k2:h-full w4k2:w-full w4k2:bg-[length:100%_100%] w4k2:max-w-[800px] relative flex items-center pl-16 md:pl-36 gap-3 max-w-[390px] w-full md:max-w-[450px] md:w-[438px] h-[100px] bg-right bg-no-repeat"
          >
            <img
              src={icon}
              alt={text}
              className="w4k2:w-[175px] w4k2:left-[-25px] w4k:left-[-15px] absolute w-[110px] md:w-fit right-[270px] md:right-[310px]"
            />

            <p className="w4k2:max-w-[800px] w4k2:text-xl text-start font-semibold text-[13px] max-w-96 md:max-w-80 w-full leading-none text-[#1F1D15] pr-10 md:pr-14">
              {t(`${text}`)}
            </p>
          </li>
        ))}
      </ul>

      <ConnectButton btnText="btnConnectWithUs" classNames="sm:hidden flex" />
    </DefaultLayout>
  );
}
