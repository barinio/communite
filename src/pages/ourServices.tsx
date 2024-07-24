import { useTranslation } from "react-i18next";

import DefaultLayout from "@/layouts/default";
import serviceImg from "@/images/our-services.png";
import serviceMobImg from "@/images/service-mob-img.png";
import itemBgImg from "@/images/bg-service-item.png";
import { ourServicesData } from "@/data/ourServicesData";
import ConnectButton from "@/components/ConnectButton";

export default function OurServicesPage() {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <section className="w-[390px] md:w-auto flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
        <div className="flex flex-col xl:flex-row items-center pl-12 md:pr-28 gap-16">
          <div className="fist-part flex flex-col items-center ">
            <h1 className="sm:hidden flex text-3xl font-extrabold italic mb-6 text-[#FDAB0C]">
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
              className="hidden sm:flex w-full max-w-[417px] h-full max-h-[373px]"
            />

            <ConnectButton btnText="btnConnectWithUs" classNames="hidden sm:flex" />
          </div>

          <ul className="flex flex-col gap-[76px]">
            {ourServicesData.map(({ icon, text }) => (
              <li
                key={text}
                style={{ backgroundImage: `url(${itemBgImg})` }}
                className="relative flex items-center pl-24 md:pl-36 gap-3 max-w-[390px] w-full md:max-w-[450px] md:w-[438px] h-[100px] bg-right bg-no-repeat"
              >
                <img
                  src={icon}
                  alt={text}
                  className="absolute w-[140px] md:w-fit right-[253px] md:right-[310px]"
                />
                <p className="text-start font-semibold text-[13px] max-w-96 md:max-w-80 w-full leading-none text-[#1F1D15] pr-10 md:pr-14">
                  {t(`${text}`)}
                </p>
              </li>
            ))}
          </ul>

          <ConnectButton btnText="btnConnectWithUs" classNames="sm:hidden flex" />
        </div>
      </section>
    </DefaultLayout>
  );
}
