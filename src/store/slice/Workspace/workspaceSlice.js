import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  workspace: [
    {
      workspaceId: "",
      userId: "",
      workspaceTitle: "",
    },
  ],
};

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {},
});

// export {} = workspaceSlice.actions
export default workspaceSlice.reducer;
