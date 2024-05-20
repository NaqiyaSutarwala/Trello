import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import StackItem from "../../components/StackItem/StackItem";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import AddCard from "../../components/AddCard/AddCard";
import styles from "./ListsPage.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ListsPage = () => {
  const [openAddList, setOpenAddList] = useState(false);
  const { id: currentWorkspaceId } = useParams();

  const { lists } = useSelector((store) => {
    return store.lists;
  });

  const currentWorkspaceLists = lists.filter((list) => {
    return list.workspaceId === currentWorkspaceId;
  });

  // const { boards, currentWorkspace } = useSelector((state) => {
  //   return state.currentUser;
  // });

  // const currentUser = useSelector((state) => {
  //   return state.currentUser;
  // });

  // const currentWorkspaceObj = boards.filter((board) => {
  //   return board.boardId === currentWorkspace;
  // });

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
        {currentWorkspaceLists?.map((list) => {
          return (
            <Item key={list.listTitle} className={styles.listItems}>
              <StackItem list={list} styles={styles}></StackItem>
            </Item>
          );
        })}

        {/* TODO: Changed styles */}
        {openAddList ? (
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "5px",
              height: "fit-content",
            }}
          >
            <AddCard type="list" setOpenAddList={setOpenAddList} />
          </div>
        ) : (
          <button
            onClick={() => {
              setOpenAddList(true);
            }}
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
        )}
      </Stack>
    </div>
  );
};

export default ListsPage;
