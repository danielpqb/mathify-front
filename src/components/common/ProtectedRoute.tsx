import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppContext } from "../../contexts/AppContext";

export default function ProtectedRoute({
  token,
  redirectPath = "/",
  children,
}: {
  token: string | null;
  redirectPath?: string;
  children?: React.ReactElement;
}) {
  const { setAlert } = useAppContext();

  useEffect(() => {
    if (!token) {
      setAlert({
        show: true,
        message: "Sign in to access this page!",
        flag: "red",
      });
    }
  }, [setAlert, token]);

  if (!token) {
    return (
      <Navigate
        to={redirectPath}
        replace
      />
    );
  }

  return children ? children : <Outlet />;
}
