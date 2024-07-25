import { Link } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <Link
        className="flex flex-1 sm:max-w-[180px] justify-center items-center gap-1 text-current sm:mr-20 "
        href="/privacy-policy"
      >
        <p className="font-medium dark:text-zinc-400 dark:opacity-50 text-sm">
          {t("privacyPolicy")}
        </p>
      </Link>

      <Link
        className="w-[292px] sm:max-w-[505px] flex flex-1 sm:inline-block justify-center items-center gap-1 text-current"
        href="/privacy-information"
      >
        <p className="font-medium leading-8 dark:text-zinc-400 dark:opacity-50 sm:text-sm">
          {t("informationOnPersonalDataProtection")}
        </p>
      </Link>
    </>
  );
};

export default Footer;
