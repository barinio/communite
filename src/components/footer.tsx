import { Link } from "@nextui-org/react";

const Footer = () => {
  return (
    <>
      <Link
        isExternal
        className="flex flex-1 sm:max-w-[180px] justify-center items-center gap-1 text-current sm:mr-20 "
        href=""
      >
        <p className="text-zinc-400 opacity-50 text-sm">Politique de confidentialité</p>
      </Link>

      <Link
        isExternal
        className="w-[292px] sm:max-w-[505px] flex flex-1 sm:inline-block justify-center items-center gap-1 text-current"
        underline="always"
        href=""
      >
        <p className=" leading-8 uppercase text-zinc-400 opacity-50 sm:text-sm">
          Information sur la protection des renseignements personnels
        </p>
      </Link>
    </>
  );
};

export default Footer;
