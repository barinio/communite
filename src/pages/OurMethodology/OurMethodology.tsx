import { Button, Image } from "@nextui-org/react";

import metodologyImg from "../../images/metodology-img.png";
import { dataMethodology } from "../../data/methodologyData";

import MethodologyList from "./MethodologyList";

import DefaultLayout from "@/layouts/default";

const OurMethodologyPage = () => {
  const handleClick = () => {
    // console.log("Click button method");
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="main-content flex flex-col xl:flex-row items-center sm:pl-12 sm:pr-10 gap-6 sm:gap-28">
          <div className="first-part xl:order-2 flex flex-col items-center">
            <h1 className="text-3xl font-extrabold text-[#FDAB0C] mb-2 mt-5 sm:mt-0">
              Our Competitive Advantage
            </h1>

            <Image
              // alt={t(`${data.title}`)}
              alt="Methodology Image"
              width={485}
              className="max-w-lg w-[245px] sm:w-full sm:mb-5"
              src={metodologyImg}
            />
            <p className="hidden sm:inline-block sm:w-[504px]">
              Libérez-vous des contraintes administratives et concentrez-vous
              sur le développement de votre entreprise. Chez CommUnite, nous
              gérons vos recevables tout en créant un environnement financier
              optimal et sécurisé pour votre croissance, soutenu par une
              expertise juridique spécialisée.
            </p>
            <Button
              className="hidden sm:flex mt-16 h-[66px] w-[273px] italic text-2xl font-extrabold text-[#1F1D15] bg-gradient-to-r from-[#FBBB17] to-[#C8AD1F]"
              onPress={handleClick}
              type="button"
              radius="full"
            >
              Contacte-nous
              {/* {t("contactBtn1")} */}
            </Button>
          </div>

          <div className="second-part xl:order-1 flex flex-col">
            <ul className="flex flex-col items-center justify-center gap-3 sm:mb-0 sm:mt-3">
              {dataMethodology.map((item) => {
                return <MethodologyList key={item.title} {...item} />;
              })}
            </ul>
          </div>
          <Button
            radius="full"
            className="sm:hidden flex justify-center mt-10 h-[66px] w-[273px] italic text-2xl font-extrabold text-[#1F1D15] bg-gradient-to-r from-[#FBBB17] to-[#C8AD1F]"
          >
            Contacte-nous
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default OurMethodologyPage;
