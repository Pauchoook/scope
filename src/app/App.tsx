import { useEffect } from "react";
import { auth } from "../shared/config/firebase";
import { AppRouter } from "./providers/router";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { userSlice } from "../store/reducers/userSlice";
// import { useAppDispatch } from "../shared/helpers/hooks/reducerHooks";

function App() {
  // const [user] = useAuthState(auth);
  // const { setUser } = userSlice.actions;
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (user) {
  //     dispatch(setUser(user));
  //   }
  // }, [user]);

  return (
    <div className="text-white dark:bg-bg min-h-screen">
      <AppRouter />
    </div>
  );
}

export default App;