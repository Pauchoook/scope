import { RouteProps } from "react-router-dom";
import { MainPage } from "../../../pages/MainPage";
import { LoginPage } from "../../../pages/LoginPage";

export enum AppRoutesAuth {
  MAIN = "main",
  LOGIN = "login",
  NOT_FOUND = "not_found",
}
export enum AppRoutes {
  LOGIN = "login",
  NOT_FOUND = "not_found",
}

export const RoutePathAuth: Record<AppRoutesAuth, string> = {
  [AppRoutesAuth.MAIN]: "/",
  [AppRoutesAuth.LOGIN]: "/login",
  [AppRoutesAuth.NOT_FOUND]: "*"
};

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.NOT_FOUND]: "*"
};

export const routeConfigAuth: Record<AppRoutesAuth, RouteProps> = {
  [AppRoutesAuth.MAIN]: {
    path: RoutePathAuth.main,
    element: <MainPage />,
  },
  [AppRoutesAuth.LOGIN]: {
    path: RoutePathAuth.login,
    element: <LoginPage />,
  },
  [AppRoutesAuth.NOT_FOUND]: {
    path: RoutePathAuth.not_found,
    element: <MainPage />,
  },
};
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <LoginPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <LoginPage />,
  },
};