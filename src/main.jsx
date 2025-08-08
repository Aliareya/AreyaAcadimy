import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StaticDataProvider } from "./contex/StaticDataContext.jsx";
import { BrowserRouter } from "react-router-dom";

// ✅ Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ApiProvider } from "./contex/ApiContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StaticDataProvider>
      <BrowserRouter>
        <ApiProvider>
          <ToastContainer
            position="top-right"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeButton={false}
            closeOnClick
            rtl={false}
            theme="colored"
            toastClassName={() =>
              "relative mt-5 flex bg-[#a6d9ef] p-4 rounded-lg text-gray-600 shadow-xl border border-gray-500"
            }
            bodyClassName={() => "text-sm font-medium "}
          />
          <App />
        </ApiProvider>
      </BrowserRouter>
    </StaticDataProvider>
  </StrictMode>
);
