import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { LandingPage } from "./pages/LandingPage.tsx";
import { CounterPage } from "./pages/CounterPage.tsx";


createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/counter" element={<CounterPage />} />
    </Routes>
  </BrowserRouter>,
);
