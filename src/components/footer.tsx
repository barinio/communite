import { Link } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <Link
        isExternal
        className="flex flex-1 sm:max-w-[180px] justify-center items-center gap-1 text-current sm:mr-20 "
        href=""
      >
        <p className="text-zinc-400 opacity-50 text-sm">{t("privacyPolicy")}</p>
      </Link>

      <Link
        isExternal
        className="w-[292px] sm:max-w-[505px] flex flex-1 sm:inline-block justify-center items-center gap-1 text-current"
        underline="always"
        href=""
      >
        <p className=" leading-8 uppercase text-zinc-400 opacity-50 sm:text-sm">
          {t("informationOnPersonalDataProtection")}
        </p>
      </Link>
    </>
  );
};

export default Footer;
