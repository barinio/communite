import { useState } from "react";
import i18next from "i18next";
import { Button } from "@nextui-org/react";

import { LOCALS } from "./constants";

import i18n from ".";

const SwitcherLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === LOCALS.EN ? LOCALS.FR : LOCALS.EN;

    i18next.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <Button
      radius="none"
      variant="faded"
      onClick={handleLanguageChange}
      className="uppercase w4k:h-[40px] w4k:w-[40px] px-1 min-w-8 text-lg font-medium h-9 rounded-none dark:bg-[#1D1D1F] dark:border-[#424245]"
    >
      {currentLanguage === LOCALS.EN ? "EN" : "FR"}
    </Button>
  );
};

export default SwitcherLanguage;
