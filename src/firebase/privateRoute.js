import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "./authProvider";
import Login from "../components/login";

const PrivateRoute = ({ component: RouteComponent, ...options }) => {
  // login、signUpはここでは使わない
  const { currentUser } = useContext(AuthContext);
  const Component = currentUser ? RouteComponent : Login;

  // routeに条件分岐をつけたもの
  return <Route {...options} component={Component} />;
};

export default PrivateRoute;