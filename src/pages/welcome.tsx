import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  Button,
  DropdownItem,
  Link
} from "@nextui-org/react";

import DefaultLayout from "@/layouts/default";
import WelcomeImg from "@/images/welcome-img.png";
import socialDropDownImg from "@/images/social-drop-down.svg";
import { welcomeDescriptionData } from "@/data/welcomeDescriptionData";
import { socialLinkData } from "@/data/socialLinkData";
// import WelcomeDropdownItem from "@/components/WelcomeDropdownItem";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex justify-end w-full gap-6">
          <p>logo</p>
          <Button
            radius="none"
            variant="faded"
            className="px-2 min-w-8 h-9 rounded-none bg-[#1D1D1F] border-[#424245]"
          >
            FR
          </Button>

          <Dropdown className="min-w-[55px] w-full p-0 mt-3 bg-transparent">
            {/* colors #1D1D1FB2 */}
            {/* bordrers #424245B2 */}
            <DropdownTrigger>
              <Button
                variant="faded"
                className="px-0 min-w-8 h-9 rounded-none bg-[#1D1D1F] border-[#424245]"
              >
                <img src={socialDropDownImg} alt="social drop down img" width={24} height={9} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" className="flex flex-col">
              {socialLinkData.map(({ key, linkPath, socialImg }) => (
                <DropdownItem
                  key={key}
                  className="bg-content1 mb-2 rounded-full w-[55px] h-[55px] flex justify-center items-center"
                >
                  <Link isExternal href={linkPath} className="flex justify-center items-center">
                    <img src={socialImg} alt={key} width={30} />
                  </Link>
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </div>

        <div className="main flex pl-12 pr-28 gap-6">
          <div className="fist-part flex flex-col items-center ">
            <h1 className="mb-5 text-3xl font-extrabold text-[#fdab0c]">Notre Expertise</h1>
            <img src={WelcomeImg} alt="WelcomeImg" width={516} className="max-w-lg" />
            <Button
              radius="full"
              className="mt-16 h-[66px] w-[273px] italic text-2xl font-extrabold text-[#1F1D15] bg-gradient-to-r from-[#FBBB17] to-[#C8AD1F]"
            >
              Contacte-nous
            </Button>
          </div>

          <div className="second-part flex flex-col">
            {welcomeDescriptionData.map(({ title, description }) => (
              <div key={title} className="w-[407px] mb-8">
                <h2 className="pl-8 text-base leading-9 text-[#fdab0c] font-extrabold">{title}</h2>
                <p className="text-[#010101] text-xs leading-[18px] font-extrabold rounded-[45px] px-[37px] py-[30px] bg-gradient-to-r from-[#FBBB17] to-[#C8AD1F]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
