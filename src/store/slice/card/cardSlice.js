import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: [{ cardId: "", listId: "", cardTitle: "", cardDescription: "" }],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
});

// export {} = cardSlice.actions
export default cardSlice.reducer;
