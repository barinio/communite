import React from "react";

import { MethodologyListProps } from "@/types/MethotListProps";

const MethodologyList: React.FC<MethodologyListProps> = ({
  title,
  description,
}) => {
  return (
    <li key={title} className="">
      <h3 className="text-lg font-extrabold text-[#FDAB0C] mb-2 ml-4">
        {title}
      </h3>
      <p className="w-96 p-6 text-xs font-extrabold  rounded-3xl bg-gradient-to-r from-[#E3C319] to-[#C8AD1F]">
        {description}
      </p>
    </li>
  );
};

export default MethodologyList;
