import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }) => {
  let navigate=useNavigate()
  if (sessionStorage.getItem("isLogged")) {
    return <>{children}</>;
  } else {
    window.location.assign("/");
    // navigate("/");
    toast.error("users not authorised");
  }
  return;
};

export default ProtectedRoute;
