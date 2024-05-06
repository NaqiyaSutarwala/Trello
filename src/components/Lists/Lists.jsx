import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "./Lists.module.css";
import SimplePaper from "../Card/Card";
import { useState } from "react";
import AddCard from "../AddCard/AddCard";
import StackItem from "../StackItem/StackItem";
import ButtonComponent from "../../common/ButtonComponent";

const dataLists = [
  {
    listTitle: "To Do",
    card: [
      {
        cardTitle: "First Card",
      },
      {
        cardTitle: "Second Card",
      },
    ],
  },
  {
    listTitle: "Pending",
    card: [],
  },
  {
    listTitle: "Done",
    card: [],
  },
  {
    listTitle: "Unique",
    card: [],
  },
  {
    listTitle: "Unique",
    card: [],
  },
  {
    listTitle: "Unique",
    card: [],
  },
  {
    listTitle: "Unique",
    card: [],
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Lists = () => {
  return (
    <div>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 2 }}
        sx={{
          "& .css-1pdryfo-MuiPaper-root": {
            borderRadius: "15px",
          },
        }}
      >
        {dataLists.map((list) => {
          return (
            <Item key={list.listTitle} className={styles.listItems}>
              <StackItem list={list} styles={styles}></StackItem>
            </Item>
          );
        })}
        {/* TODO: Changed styles */}
        <button
          className={styles.button}
          style={{
            padding: "10px",
            backgroundColor: "#091e4224",
            color: "white",
          }}
        >
          <AddIcon sx={{ color: "white" }} />
          <span style={{ paddingLeft: "8px" }}>Add a List</span>
        </button>
      </Stack>
    </div>
  );
};

export default Lists;
