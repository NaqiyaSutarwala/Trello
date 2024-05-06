import { Button } from "@mui/material";
import React from "react";
import BoardLists from "../../components/Board list/BoardLists";

const WorkspacePage = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto",
        gap: "20px",
      }}
    >
      <Button
        style={{
          height: 100,
          width: 265,
          borderRadius: 10,
          backgroundColor: "#091e4224",
          color: "black",
        }}
      >
        Add new Workspace
      </Button>
      <BoardLists />
      <BoardLists />
      <BoardLists />
      <BoardLists />
      <BoardLists />
      <BoardLists />
      <BoardLists />
      <BoardLists />
      <BoardLists />
      <BoardLists />
      <BoardLists />
      <BoardLists />
      <BoardLists />
      <BoardLists />
      <BoardLists />
    </div>
  );
};

export default WorkspacePage;
