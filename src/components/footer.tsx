import { Link } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <Link
        className="mr-5 lg:max-w-[600px] lg:w-auto flex w-full sm:max-w-[180px] justify-center items-center text-current"
        href="/privacy-policy"
      >
        <p className="w4k:text-xl font-medium dark:text-zinc-400 dark:opacity-50 text-base">
          {t("privacyPolicy")}
        </p>
      </Link>

      <Link
        className="sm:max-w-[350px] lg:max-w-[900px] lg:w-auto flex w-full justify-center items-center gap-1 text-current"
        href="/privacy-information"
      >
        <p className="w4k:text-xl sm:max-w-[350px] lg:max-w-[900px] lg:w-auto font-medium leading-8 dark:text-zinc-400 dark:opacity-50 sm:text-base">
          {t("informationOnPersonalDataProtection")}
        </p>
      </Link>
    </>
  );
};

export default Footer;
