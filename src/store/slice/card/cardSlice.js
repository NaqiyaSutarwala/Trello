import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  cards: [{ cardId: "", listId: "", cardTitle: "", cardDescription: "" }],
  currentCardID: "",
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard(action, state) {
      const cardId = uuid().slice(0, 8);
      action.cards = [
        ...action.cards,
        {
          cardId,
          listId: state.payload.listId,
          cardTitle: state.payload.cardTitle,
          cardDescription: state.payload.cardDescription,
        },
      ];
    },
    deleteCardsOnDeletingList(state, action) {
      state.cards = state.cards.filter((card) => {
        return card.listId !== action.payload;
      });
    },
  },
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
