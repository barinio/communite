import { Route, Routes } from "react-router-dom";

import WelcomePage from "@/pages/welcome";
import OurServicesPage from "@/pages/ourServices";
import OurMethodologyPage from "@/pages/ourMethodology";
import ContactUsPage from "@/pages/contactUs";
import AdvantagesOfCoMUnitiPage from "@/pages/advantagesOfComuniti";

function App() {
  return (
    <Routes>
      <Route element={<WelcomePage />} path="/" />
      <Route element={<OurServicesPage />} path="/our-services" />
      <Route element={<OurMethodologyPage />} path="/our-methodology" />
      <Route element={<ContactUsPage />} path="/contact-us" />
      <Route element={<AdvantagesOfCoMUnitiPage />} path="/advantages-of-comuniti" />
    </Routes>
  );
}

export default App;
