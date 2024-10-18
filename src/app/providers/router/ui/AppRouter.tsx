import { Route, Routes } from "react-router-dom"
import { routeConfig, routeConfigAuth } from "../../../../shared/config/route"
import { useAuthState } from "react-firebase-hooks/auth";
import { userSlice } from "../../../../store/reducers/userSlice";
import { useAppDispatch } from "../../../../shared/helpers/hooks/reducerHooks";
import { auth } from "../../../../shared/config/firebase";
import { useEffect } from "react";

export const AppRouter = () => {
  // const {isAuth} = useAppSelector(state => state.user);
  const [user] = useAuthState(auth);
  const { setUser } = userSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user]);

  return (
    <Routes>
      {user ? (
        Object.values(routeConfigAuth).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))
      ) : (
        Object.values(routeConfig).map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))
      )}
    </Routes>
  )
}