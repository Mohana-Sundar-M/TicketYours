import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import Sidebar from "./components/Admin/Dashboard/Sidebar";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
  const navigate = useNavigate();

  const userInfo =
    sessionStorage.userInfo && JSON.parse(sessionStorage.userInfo);

  useEffect(() => {
    window.location.pathname === "/admin" && navigate("/admin/dashboard");
  }, [navigate]);

  return (
    <>
      {/* {userInfo?.token.length && userInfo?.role === "Admin" ? ( */}
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-10">{props.children}</div>
      </div>
      {/* ) : (
        <Login />
      )} */}
    </>
  );
};

export default ProtectedRoute;
