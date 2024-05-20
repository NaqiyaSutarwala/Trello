import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { addLists } from "../../store/slice/Lists/listsSlice";
import { addCard } from "../../store/slice/card/cardSlice";

const AddCard = ({ setOpenAddCard, type, setOpenAddList, currentListId }) => {
  const [title, setTitle] = useState();
  const dispatch = useDispatch();

  const { currentWorkSpaceId } = useSelector((store) => {
    return store.workspace;
  });

  const handleAddList = () => {
    dispatch(
      addLists({
        workspaceId: currentWorkSpaceId,
        listTitle: title,
      })
    );
    setOpenAddList(false);
  };

  const handleAddCard = () => {
    dispatch(
      addCard({
        cardTitle: title,
        cardDescription: "as",
        listId: currentListId,
      })
    );
    setOpenAddCard(false);
  };

  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <TextField
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        type="text"
        placeholder={`Enter a title for this ${
          type === "Card" ? "card" : "list"
        }`}
        style={{
          height: "auto",
          width: "100%",
        }}
        sx={{
          border: "none",
          outline: "none",
          "& .css-ropeg3-MuiInputBase-root-MuiOutlinedInput-root": {
            height: "auto",
            width: "100%",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            outline: "none",
            borderRadius: "10px",
          },
          "& .css-ropeg3-MuiInputBase-root-MuiOutlinedInput-root :focus": {
            outline: "none",
            border: "none",
          },
        }}
      />

      <div
        style={{
          marginTop: "10px",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            type === "list" && handleAddList();
            type === "Card" && handleAddCard();
          }}
        >
          Add {type === "Card" ? "card" : "list"}
        </Button>
        <Button
          onClick={() => {
            type === "Card" && setOpenAddCard(false);
            type === "list" && setOpenAddList(false);
          }}
        >
          <CloseIcon
            sx={{
              color: "black",
              marginLeft: "10px",
            }}
          />
        </Button>
      </div>
    </div>
  );
};

export default AddCard;
