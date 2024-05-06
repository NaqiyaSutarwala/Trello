import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const AddCard = ({ setOpenAddCard, list, type }) => {
  const [cardTitle, setCardTitle] = useState();

  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <TextField
        onChange={(e) => {
          setCardTitle(e.target.value);
        }}
        value={cardTitle}
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
            list.card.push({ ...list, cardTitle });
          }}
        >
          Add {type === "Card" ? "card" : "list"}
        </Button>
        <Button
          onClick={() => {
            setOpenAddCard(false);
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
