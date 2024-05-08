import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [{ userId: "1", userName: "", password: "", isLoggedIn: false }],
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// export {} = UserSlice.actions
export default UserSlice.reducer;
