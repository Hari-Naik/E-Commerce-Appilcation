import { Navigate, Outlet } from "react-router-dom";
import { useToken } from "../hooks/useToken";

const ProtectedRoute = () => {
  const { token } = useToken();

  return token ? <Outlet /> : <Navigate to={"/account/login"} />;
};

export default ProtectedRoute;
