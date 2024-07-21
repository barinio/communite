import { Image } from "@nextui-org/react";

import metodologyImg from "../../image/metodology-img.png";

import MethodologyList from "./MethodologyList";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

// interface OurMethodologyPageProps {
//   // Определите здесь пропсы, если они нужны
// }
// import type { ImageProps } from "@nextui-org/image";
// const Image: React.FC<ImageProps> = Image as any;

const OurMethodologyPage = () => {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Our Competitive Advantage</h1>
        </div>
        <Image
          // alt={t(`${data.title}`)}
          alt="Methodology Image"
          className="w-full h-full object-contain"
          src={metodologyImg}
        />
        {/* <img
          alt="Our Methodology Diagram"
          src={metodologyImg}
          className="w-full h-full object-contain"
        /> */}
        <ul>
          <MethodologyList />
        </ul>
      </section>
    </DefaultLayout>
  );
};

export default OurMethodologyPage;
