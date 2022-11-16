import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "../../contexts/contexts";

export default function ProtectedRoute({ token, redirectPath = "/", children }) {
  const { setAlert } = useContext(AppContext);

  useEffect(() => {
    if (!token) {
      setAlert({
        show: true,
        message: "Sign in to access this page!",
        type: 0,
        doThis: () => {},
        color: "rgba(230,200,0)",
        icon: "alert-circle",
      });
    }
  }, [setAlert, token]);

  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
}
