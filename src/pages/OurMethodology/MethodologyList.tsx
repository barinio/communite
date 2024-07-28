import React from "react";
import { useTranslation } from "react-i18next";

type MethodologyListProps = {
  title: string;
  description: string;
};

const MethodologyList: React.FC<MethodologyListProps> = ({
  title,
  description,
}) => {
  const { t } = useTranslation();

  return (
    <li key={title} className="">
      <h3 className="text-lg font-extrabold text-center sm:text-start text-[#FDAB0C] mb-1 ml-4">
        {t(`${title}`)}
      </h3>
      <p className="w-96 w4k:w-[500px] p-6 text-xs text-[#010101] font-extrabold  rounded-3xl bg-gradient-to-r from-[#FBBB17] to-[#C8AD1F]">
        {t(`${description}`)}
      </p>
    </li>
  );
};

export default MethodologyList;
