
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { initGoogleAnalytics } from "./analytics.js";
import { initMicrosoftClarity } from "./clarity.js";

initGoogleAnalytics("G-TGDZ5D9G1L");
initMicrosoftClarity("ywxo47f3ge");

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
