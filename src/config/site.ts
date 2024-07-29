import instagram from "@/images/instagram.svg";
import whatsapp from "@/images/whatsapp.svg";
import twitter from "@/images/twitter.svg";
import youtube from "@/images/youtube.svg";
import github from "@/images/github.svg";

export type SiteConfig = typeof siteConfig;

const baseNavItems = [
  {
    label: "welcome",
    href: "/welcome"
  },
  {
    label: "ourServices",
    href: "/our-services"
  },
  {
    label: "ourMethodology",
    href: "/our-methodology"
  },
  {
    label: "contactUs",
    href: "/contact-us"
  },
  {
    label: "advantages",
    href: "/advantages"
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
      href: "/privacy-policy"
    },
    {
      label: "informationOnPersonalDataProtection",
      href: "/privacy-information"
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
