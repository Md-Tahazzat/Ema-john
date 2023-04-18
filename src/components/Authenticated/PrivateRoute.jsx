import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loading></Loading>;
  else if (user) return <>{children}</>;
  return <Navigate to="/login" state={{ from: location }} replace={true} />;
};

export default PrivateRouter;
