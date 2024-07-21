import { DropdownItem, Link } from "@nextui-org/react";

interface WelcomeDropdownItemProps {
  key: string;
  linkPath: string;
  socialImg: string;
}

const WelcomeDropdownItem = ({ key, linkPath, socialImg }: WelcomeDropdownItemProps) => {
  return (
    <DropdownItem key={key}>
      <Link isExternal href={linkPath}>
        {socialImg}
      </Link>
    </DropdownItem>
  );
};

export default WelcomeDropdownItem;
