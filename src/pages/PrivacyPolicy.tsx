import { Link } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import DefaultLayout from "@/layouts/default";
import { privacyPolicyData } from "@/data/privacyPolicyData";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <div className="block w-full max-w-[570px] md:max-w-full w4k:pl-24  w4k:pt-0 md:pl-10 py-8 lg:pl-0 md:py-10 w4k:px-10">
        <h1 className="w4k:text-5xl text-3xl mb-16 dark:text-zinc-400">{t("privacyPolicyH1")}</h1>
        <ol className="flex flex-col gap-16">
          {privacyPolicyData.map(({ title, description }) => (
            <li key={title}>
              <h2 className="w4k:text-4xl text-3xl mb-4 dark:text-zinc-400">{t(`${title}`)}</h2>
              <p className="w4k:text-3xl text-2xl dark:text-zinc-400">{t(`${description}`)}</p>
            </li>
          ))}
        </ol>

        <p className="w4k:text-3xl text-2xl dark:text-zinc-400 mt-16 mb-4">
          {t("privacyOfficerText")}
        </p>
        <p className="w4k:text-3xl text-2xl dark:text-zinc-400 font-semibold mb-4">
          Patrick René, Directeur des Opérations
        </p>
        <p className="w4k:text-3xl text-2xl dark:text-zinc-400 mb-4">
          4350 Beaubien Est, Montréal (Québec) H1T 1S9
        </p>
        <Link
          href="mailto:info@CommUnite.com"
          className="mb-4 block w4k:text-3xl text-2xl"
          underline="always"
          color="danger"
        >
          info@CommUnite.com
        </Link>
        <Link
          isExternal
          href="https://www.cai.gouv.qc.ca/citoyens/acces-et-protection-de-vos-renseignements-personnels/quest-ce-quun-renseignement-personnel/"
          underline="always"
          color="danger"
          className="w4k:text-3xl text-2xl block "
        >
          cai.gouv.qc.ca
        </Link>
      </div>
    </DefaultLayout>
  );
};

export default PrivacyPolicy;
