import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import RouterElementWrapper from "./RouterElementWrapper";

import { routeConfig } from "@/config/routeConfig/routeConfig";

const HomePage = lazy(() => import("@/pages/home"));

export const AppRouter = () => {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<HomePage />} />

        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<RouterElementWrapper>{element}</RouterElementWrapper>}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};
