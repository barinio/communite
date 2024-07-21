import { Button, Image } from "@nextui-org/react";

import metodologyImg from "../../image/metodology-img.png";

import MethodologyList from "./MethodologyList";
import { dataMethodology } from "./dataMethodology";

import DefaultLayout from "@/layouts/default";

const OurMethodologyPage = () => {
  const handleClick = () => {
    console.log("Click button method");
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className="text-3xl font-extrabold text-[#FDAB0C] mb-2">
            Our Competitive Advantage
          </h1>
        </div>
        <Image
          // alt={t(`${data.title}`)}
          alt="Methodology Image"
          className="w-full h-full object-contain"
          src={metodologyImg}
        />

        <ul className="flex flex-col items-center justify-center gap-5 mb-20">
          {dataMethodology.map((item) => {
            return <MethodologyList key={item.title} {...item} />;
          })}
        </ul>

        <Button
          className="min-w-64 mb-11 md:mb-0 rounded-3xl bg-gradient-to-r from-[#E3C319] to-[#C8AD1F"
          onPress={handleClick}
          type="button"
          size="lg"
          style={{ backgroundColor: "#AD8E20" }}
        >
          Contacte-nous
          {/* {t("contactBtn1")} */}
        </Button>
      </section>
    </DefaultLayout>
  );
};

export default OurMethodologyPage;
