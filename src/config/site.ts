import instagram from "@/images/instagram.svg";
import whatsapp from "@/images/whatsapp.svg";
import twitter from "@/images/twitter.svg";
import youtube from "@/images/youtube.svg";
import github from "@/images/github.svg";
import { RoutePaths } from "@/config/routeConfig/routeConfig";

export type SiteConfig = typeof siteConfig;

const baseNavItems = [
  {
    label: "welcome",
    href: RoutePaths.welcome
  },
  {
    label: "ourServices",
    href: RoutePaths.our_services
  },
  {
    label: "ourMethodology",
    href: RoutePaths.our_methodology
  },
  {
    label: "contactUs",
    href: RoutePaths.contact_us
  },
  {
    label: "advantages",
    href: RoutePaths.advantages
  }
];

export const siteConfig = {
  name: "CommUnite",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: baseNavItems,
  navMenuItems: [
    ...baseNavItems,
    {
      label: "privacyPolicy",
      href: RoutePaths.privacy_policy
    },
    {
      label: "informationOnPersonalDataProtection",
      href: RoutePaths.privacy_information
    }
  ],
  links: [
    { key: "instagram", linkPath: "https://www.instagram.com/", socialImg: instagram },
    { key: "whatsapp", linkPath: "https://www.whatsapp.com/", socialImg: whatsapp },
    { key: "twitter", linkPath: "https://x.com/?lang=en", socialImg: twitter },
    { key: "youtube", linkPath: "https://www.youtube.com/", socialImg: youtube },
    { key: "github", linkPath: "https://github.com/", socialImg: github }
  ]
};
