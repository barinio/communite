import { Button, Link } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

interface ConnectButtonProps {
  btnText: string;
  classNames?: string;
}

const ConnectButton = ({ btnText, classNames }: ConnectButtonProps) => {
  const { t } = useTranslation();

  return (
    <Button
      radius="full"
      as={Link}
      href="/contact-us"
      className={`${classNames} mt-16 h-[66px] w-[273px] italic text-2xl font-extrabold text-[#1F1D15] bg-gradient-to-r from-[#FBBB17] to-[#C8AD1F]`}
    >
      {t(`${btnText}`)}
    </Button>
  );
};

export default ConnectButton;
