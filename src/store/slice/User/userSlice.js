import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  users: [{ userId: "1", userName: "", password: "", isLoggedIn: false }],
  currentUserId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, action) {
      const userId = uuid().slice(0, 8);

      state.users = [
        ...state.users,
        {
          userId,
          userName: action.payload.userName,
          password: action.payload.password,
          isLoggedIn: true,
        },
      ];

      state.currentUserId = userId;
    },
  },
});

export const { userLogin } = userSlice.actions;
export default userSlice.reducer;
