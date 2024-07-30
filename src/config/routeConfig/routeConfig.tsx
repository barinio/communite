import { lazy } from "react";
import { RouteProps } from "react-router-dom";

const WelcomePage = lazy(() => import("@/pages/welcome"));
const OurServicesPage = lazy(() => import("@/pages/ourServices"));
const OurMethodologyPage = lazy(() => import("@/pages/OurMethodology/OurMethodology"));
const ContactUsPage = lazy(() => import("@/pages/contactUs"));
const AdvantagesPage = lazy(() => import("@/pages/advantages"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const PrivacyInformation = lazy(() => import("@/pages/PrivacyInformation"));

export enum AppRoutes {
  WELCOME = "welcome",
  OUR_SERVICES = "our_services",
  OUR_METHODOLOGY = "our_methodology",
  CONTACT_US = "contact_us",
  ADVANTAGES = "advantages",
  PRIVACY_POLICY = "privacy_policy",
  PRIVACY_INFORMATION = "privacy_information"
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.WELCOME]: "/welcome",
  [AppRoutes.OUR_SERVICES]: "/our-services",
  [AppRoutes.OUR_METHODOLOGY]: "/our-methodology",
  [AppRoutes.CONTACT_US]: "/contact-us",
  [AppRoutes.ADVANTAGES]: "/advantages",
  [AppRoutes.PRIVACY_POLICY]: "/privacy-policy",
  [AppRoutes.PRIVACY_INFORMATION]: "/privacy-information"
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
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
