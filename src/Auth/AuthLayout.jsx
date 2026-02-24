import React from "react";
import { Outlet } from "react-router-dom";
import "../assets/Styles/_auth.scss";

const AuthLayout = () => {
  return (
    <div className="AuthLayout">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
