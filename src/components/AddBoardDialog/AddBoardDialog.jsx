import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addWorkSpace } from "../../ListsSlice";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

export default function AddBoardDialog({ setOpenAddBoard, show }) {
  const dispatch = useDispatch();
  const [boardTitle, setBoardTitle] = React.useState("");

  return (
    <>
      <Dialog
        sx={{
          padding: "20px",
          "& .css-1t1j96h-MuiPaper-root-MuiDialog-paper": {
            backgroundColor: "var(--background-color)",
          },
        }}
        open={show}
      >
        <ClickAwayListener onClickAway={() => {
            setOpenAddBoard(false)
        }}>
          <div>
            <DialogTitle
              style={{ textAlign: "center" }}
              id="alert-dialog-title"
            >
              Create Board
            </DialogTitle>
            <DialogContent>
              <TextField
                onBlur={(e) => {
                  setBoardTitle(e.target.value);
                }}
                id="outlined-basic"
                label="Board Title"
                variant="outlined"
                sx={{
                  marginTop: "10px",
                  width: "400px",
                }}
              />
            </DialogContent>
            <Button
              onClick={() => {
                dispatch(addWorkSpace(boardTitle));
                setOpenAddBoard(false);
              }}
              variant="contained"
              style={{
                margin: "20px",
                marginTop: "0",
                backgroundColor: "var(--header-color)",
              }}
            >
              Create
            </Button>
          </div>
        </ClickAwayListener>
      </Dialog>
    </>
  );
}
