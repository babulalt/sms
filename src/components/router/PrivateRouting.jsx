import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigation } from "../Naviagation";

function PrivateRoute() {
  const authValue = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {authValue ? (
        <>
         <Navigation>
          <Outlet />
        </Navigation >
        </>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
}

export default PrivateRoute;
