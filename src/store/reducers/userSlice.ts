import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../shared/types";
import { User as FirebaseUser } from "firebase/auth";

const initialState: UserState = {
  isAuth: false,
  user: null
  // getAuth: auth

};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<FirebaseUser>) => {
      state.user = action.payload;
      state.isAuth = true;
    },
  },
});

export default userSlice.reducer;
