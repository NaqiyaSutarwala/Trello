import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  lists: [
    {
      listId: "",
      workspaceId: "",
      listTitle: "",
    },
  ],
  currentListId: "",
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addLists(state, action) {
      const listId = uuid().slice(0, 8);

      state.lists = [
        ...state.lists,
        {
          listId,
          workspaceId: action.payload.workspaceId,
          listTitle: action.payload.listTitle,
        },
      ];
      state.currentListId = listId;
    },
    deleteListsOnDeletingWorkspace(state, action) {
      state.lists = state.lists.filter((list) => {
        return list.workspaceId !== action.payload;
      });
    },
    updateLists(state, action) {
      state.lists = state.lists.map((list) => {
        if (action.payload.listId === list.listId) {
          return {
            listId: action.payload.listId,
            workspaceId: list.workspaceId,
            listTitle: action.payload.listTitle,
          };
        } else {
          return list;
        }
      });
    },
    deleteLists(state, action) {
      state.lists = state.lists.filter((list) => {
        return action.payload !== list.listId;
      });
    },
  },
});

export const {
  addLists,
  deleteListsOnDeletingWorkspace,
  deleteLists,
  updateLists,
} = listSlice.actions;
export default listSlice.reducer;
