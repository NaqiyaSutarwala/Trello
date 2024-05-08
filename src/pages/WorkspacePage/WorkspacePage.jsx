import { Button } from "@mui/material";
import React, { useState } from "react";
import BoardLists from "../../components/Board list/BoardLists";
import AddBoardDialog from "../../components/AddBoardDialog/AddBoardDialog";
import styles from "./WorkspacePage.module.css";
import "../../stylesheet/global.css";
import { useSelector } from "react-redux";

const WorkspacePage = () => {
  const [openAddBoard, setOpenAddBoard] = useState(false);
  const currentUser = useSelector((store) => {
    return store.currentUser;
  });
  console.log(currentUser);
  return (
    <>
      {openAddBoard && (
        <AddBoardDialog setOpenAddBoard={setOpenAddBoard} show={openAddBoard} />
      )}
      <div className={styles.mainGrid}>
        <Button
          sx={{
            backgroundColor: "#01010159",
            color: "var(--text-color)",
            "&:hover": {
              backgroundColor: "#5e003a",
              color: "white",
            },
          }}
          className={styles.addCardButton}
          onClick={() => {
            setOpenAddBoard(true);
          }}
        >
          Add new Workspace
        </Button>

        {currentUser.boards?.map((board) => {
          console.log(board.boardId);
          return (
            <BoardLists
              key={board.boardId}
              boardTitle={board.boardTitle}
              id={board.boardId}
            />
          );
        })}
      </div>
    </>
  );
};

export default WorkspacePage;
