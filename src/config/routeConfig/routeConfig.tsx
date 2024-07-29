import { RouteProps } from "react-router-dom";

import HomePage from "@/pages/home";
import WelcomePage from "@/pages/welcome";
import OurServicesPage from "@/pages/ourServices";
import OurMethodologyPage from "@/pages/OurMethodology/OurMethodology";
import ContactUsPage from "@/pages/contactUs";
import AdvantagesPage from "@/pages/advantages";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import PrivacyInformation from "@/pages/PrivacyInformation";

export enum AppRoutes {
  HOME = "home",
  WELCOME = "welcome",
  OUR_SERVICES = "our_services",
  OUR_METHODOLOGY = "our_methodology",
  CONTACT_US = "contact_us",
  ADVANTAGES = "advantages",
  PRIVACY_POLICY = "privacy_policy",
  PRIVACY_INFORMATION = "privacy_information"
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.WELCOME]: "/welcome",
  [AppRoutes.OUR_SERVICES]: "/our-services",
  [AppRoutes.OUR_METHODOLOGY]: "/our-methodology",
  [AppRoutes.CONTACT_US]: "/contact-us",
  [AppRoutes.ADVANTAGES]: "/advantages",
  [AppRoutes.PRIVACY_POLICY]: "/privacy-policy",
  [AppRoutes.PRIVACY_INFORMATION]: "/privacy-information"
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: RoutePaths.home,
    element: <HomePage />
  },
  [AppRoutes.WELCOME]: {
    path: RoutePaths.welcome,
    element: <WelcomePage />
  },
  [AppRoutes.OUR_SERVICES]: {
    path: RoutePaths.our_services,
    element: <OurServicesPage />
  },
  [AppRoutes.OUR_METHODOLOGY]: {
    path: RoutePaths.our_methodology,
    element: <OurMethodologyPage />
  },
  [AppRoutes.CONTACT_US]: {
    path: RoutePaths.contact_us,
    element: <ContactUsPage />
  },
  [AppRoutes.ADVANTAGES]: {
    path: RoutePaths.advantages,
    element: <AdvantagesPage />
  },
  [AppRoutes.PRIVACY_POLICY]: {
    path: RoutePaths.privacy_policy,
    element: <PrivacyPolicy />
  },
  [AppRoutes.PRIVACY_INFORMATION]: {
    path: RoutePaths.privacy_information,
    element: <PrivacyInformation />
  }
};
