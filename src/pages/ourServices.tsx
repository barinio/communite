import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import DefaultLayout from "@/layouts/default";
import mainserv from "@/images/our-services.png";
import itemBgImg from "@/images/bg-service-item.png";
import { ourServicesData } from "@/data/ourServicesData";

export default function OurServicesPage() {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <section className="flex flex-col flex-1 items-center justify-center gap-4 pt-12 pb-8 md:pb-10">
        <div className="flex w-full sm:pr-24 text-center justify-between gap-10">
          <div className="flex items-center justify-center flex-col min-w-[300px] gap-20">
            <img
              src={mainserv}
              alt="Service"
              width={350}
              className=" w-full max-w-[417px] h-full max-h-[373px]"
            />
            <Button
              radius="full"
              className="hidden sm:flex mt-16 h-[66px] w-[273px] italic text-2xl font-extrabold text-[#1F1D15] bg-gradient-to-r from-[#FBBB17] to-[#C8AD1F]"
            >
              {t("btnConnectWithUs")}
            </Button>
          </div>

          <ul className="flex flex-col gap-[76px]">
            {ourServicesData.map(({ icon, text }) => (
              <li
                key={text}
                style={{ backgroundImage: `url(${itemBgImg})` }}
                className="relative flex items-center pl-36 gap-3 max-w-[450px] w-[438px] h-[100px] bg-cover bg-center bg-no-repeat"
              >
                <img src={icon} alt={text} className="absolute right-[310px]" />
                <p className="text-start text-[13px] max-w-80 w-full leading-none text-[#1F1D15] font-semibold pr-14">
                  {t(`${text}`)}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </DefaultLayout>
  );
}
