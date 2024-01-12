import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css";
import ContextApi from "./api/ContextApi";
import Profile from "./component/Profile";

createRoot(document.getElementById("root")).render(
  <ContextApi>
    <App />
  </ContextApi>
  // <Profile />
);