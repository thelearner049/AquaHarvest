import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import Estimation from "./components/Estimation.jsx";
import Features from "./components/Features.jsx";
import Impact from "./components/Impact.jsx";
import Gis from "./components/Gis.jsx";
import SatelliteView from "./components/SatelliteView.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="estimation" element={<Estimation />} />
      <Route path="services" element={<Features />} />
      <Route path="impact" element={<Impact />} />
      <Route path="gis" element={<Gis />} />
      <Route path="satellite" element={<SatelliteView />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
