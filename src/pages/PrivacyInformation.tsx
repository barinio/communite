import { Link } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import DefaultLayout from "@/layouts/default";

const PrivacyInformation = () => {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <div className="block w-full max-w-[570px] md:max-w-full w4k:pl-24  w4k:pt-0 md:pl-10 py-8 lg:pl-0 md:py-10 w4k:px-10">
        <h1 className="w4k:text-5xl text-3xl mb-16 dark:text-zinc-400">
          {t("privacyInformationH1")}
        </h1>
        <p className="w4k:text-3xl text-2xl dark:text-zinc-400 mb-3">{t("privacyInformationP1")}</p>
        <p className="w4k:text-3xl text-2xl dark:text-zinc-400 font-semibold mb-3">
          {t("privacyInformationP2")}
        </p>
        <p className="w4k:text-3xl text-2xl dark:text-zinc-400 mb-3">{t("privacyInformationP3")}</p>
        <Link
          href="mailto:info@CommUnite.com"
          underline="always"
          color="danger"
          className="mb-3 w4k:text-3xl text-2xl"
        >
          info@CommUnite.com
        </Link>
        <p className="w4k:text-3xl text-2xl dark:text-zinc-400 mb-3">
          4350 Beaubien Est, Montréal (Québec) H1T 1S9
        </p>
        <p className="w4k:text-3xl text-2xl dark:text-zinc-400 ">1.855.624.8737 x 248</p>
      </div>
    </DefaultLayout>
  );
};

export default PrivacyInformation;
