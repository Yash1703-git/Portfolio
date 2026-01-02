import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({ duration: 1000 });

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
