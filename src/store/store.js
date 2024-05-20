import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ListsSlice from "../ListsTrySlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import workspaceSlice from "./slice/Workspace/workspaceSlice";
import listsSlice from "./slice/Lists/listsSlice";
import cardSlice from "./slice/card/cardSlice";
import UserSlice from "./slice/User/userSlice";
import ListsTrySlice from "../ListsTrySlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: UserSlice,
  workspace: workspaceSlice,
  lists: listsSlice,
  cards: cardSlice,
  data: ListsTrySlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  // middleware: [thunk],
});

export const persistor = persistStore(store);
