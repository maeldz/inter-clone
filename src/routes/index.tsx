import React from "react";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import { useAuth } from "../contexts/auth";

const Routes: React.FC = () => {
  const { signed } = useAuth();

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
