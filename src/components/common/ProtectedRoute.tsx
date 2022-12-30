import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({
  token,
  noTokenPath = "/home",
  children,
}: {
  token: string | null;
  noTokenPath?: string;
  children?: React.ReactElement;
}) {
  if (!token) {
    return (
      <Navigate
        to={noTokenPath}
        replace
      />
    );
  }

  return children ? children : <Outlet />;
}
