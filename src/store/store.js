import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ListsSlice from "../ListsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import userSlice from "./slice/User/userSlice";
import workspaceSlice from "./slice/Workspace/workspaceSlice";
import listsSlice from "./slice/Lists/listsSlice";
import cardSlice from "./slice/card/cardSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
  workspace: workspaceSlice,
  lists: listsSlice,
  cards: cardSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  // middleware: [thunk],
});

export const persistor = persistStore(store);
