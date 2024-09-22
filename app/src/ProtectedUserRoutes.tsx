import React, { ReactNode } from "react";
import Login from "./pages/Login";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const userInfo =
    sessionStorage.userInfo && JSON.parse(sessionStorage.userInfo);

  return (
    <>
      {/* {userInfo?.token.length && userInfo?.role === "Uer" ? ( */}
      <div className="flex-1 p-10">{props.children}</div>
      {/* ) : (
        <Login />
      )} */}
    </>
  );
};

export default ProtectedRoute;
