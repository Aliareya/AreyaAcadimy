import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StaticDataProvider } from "./contex/StaticDataContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from "./contex/ApiContext.jsx";
import { UserProvider } from "./contex/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StaticDataProvider>
      <BrowserRouter>
        <ApiProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ApiProvider>
      </BrowserRouter>
    </StaticDataProvider>
  </StrictMode>
);
