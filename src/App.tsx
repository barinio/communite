import { Navigate, Route, Routes } from "react-router-dom";

import MainPage from "@/pages/main";
import WelcomePage from "@/pages/welcome";
import OurServicesPage from "@/pages/ourServices";
import OurMethodologyPage from "@/pages/ourMethodology";
import ContactUsPage from "@/pages/contactUs";
import AdvantagesOfCoMUnitiPage from "@/pages/advantagesOfComuniti";

function App() {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      <Route element={<WelcomePage />} path="/welcome" />
      <Route element={<OurServicesPage />} path="/our-services" />
      <Route element={<OurMethodologyPage />} path="/our-methodology" />
      <Route element={<ContactUsPage />} path="/contact-us" />
      <Route element={<AdvantagesOfCoMUnitiPage />} path="/advantages-of-comuniti" />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
