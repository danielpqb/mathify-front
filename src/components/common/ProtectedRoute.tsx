import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({
  token,
  hasTokenPath = "/",
  children,
}: {
  token: string | null;
  hasTokenPath?: string;
  children?: React.ReactElement;
}) {
  if (token) {
    return (
      <Navigate
        to={hasTokenPath}
        replace
      />
    );
  }

  return children ? children : <Outlet />;
}
