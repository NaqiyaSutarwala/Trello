import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: [
    {
      listId: "",
      workspaceId: "",
      listTitle: "",
    },
  ],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
});

// export {} = listSlice.actions
export default listSlice.reducer;
