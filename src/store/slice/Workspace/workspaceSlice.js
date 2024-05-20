import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  workspace: [
    {
      workspaceId: "",
      userId: "",
      workspaceTitle: "",
    },
  ],
  currentWorkSpaceId: "",
};

const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    addWorkSpace(state, action) {
      const workspaceId = uuid().slice(0, 8);

      state.workspace = [
        ...state.workspace,
        {
          workspaceId,
          userId: action.payload.userId,
          workspaceTitle: action.payload.workspaceTitle,
        },
      ];
    },
    currentWorkspace(state, action) {
      state.currentWorkSpaceId = action.payload;
    },
    updateWorkspace(state, action) {
      state.workspace = state.workspace.map((workspace) => {
        if (action.payload.workspaceId === workspace.workspaceId) {
          return {
            workspaceId: action.payload.workspaceId,
            workspaceTitle: action.payload.workspaceTitle,
            userId: workspace.userId,
          };
        } else {
          return workspace;
        }
      });
    },
    deleteWorkspace(state, action) {
      state.workspace = state.workspace.filter((workspace) => {
        return action.payload !== workspace.workspaceId;
      });
    },
  },
});

export const {
  addWorkSpace,
  deleteWorkspace,
  currentWorkspace,
  updateWorkspace,
} = workspaceSlice.actions;
export default workspaceSlice.reducer;
