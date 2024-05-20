import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { useState } from "react";
import { updateLists } from "../../store/slice/Lists/listsSlice";

export default function EditListsDialog({ list, show, setOpenEditListDialog }) {
  const [listTitle, setListTitle] = useState("");

  const dispatch = useDispatch();
  const listId = list.listId;

  const handleUpdateWorkspace = () => {
    dispatch(updateLists({ listId, listTitle }));
    setOpenEditListDialog(false);
  };

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
        <ClickAwayListener
          onClickAway={() => {
            setOpenEditListDialog(false);
          }}
        >
          <div>
            <DialogTitle
              style={{ textAlign: "center" }}
              id="alert-dialog-title"
            >
              Edit Lists Title
            </DialogTitle>
            <DialogContent>
              <TextField
                onBlur={(e) => {
                  setListTitle(e.target.value);
                }}
                id="outlined-basic"
                label="List Title"
                variant="outlined"
                sx={{
                  marginTop: "10px",
                  width: "400px",
                }}
              />
            </DialogContent>
            <Button
              onClick={() => {
                handleUpdateWorkspace();
              }}
              variant="contained"
              style={{
                minWidth: "405px",
                margin: "20px",
                marginTop: "0",
                backgroundColor: "var(--header-color)",
              }}
            >
              Update
            </Button>
            <br />
            <Button
              onClick={() => {
                setOpenEditListDialog(false);
              }}
              variant="contained"
              style={{
                width: "405px",
                margin: "20px",
                marginTop: "0",
                backgroundColor: "var(--header-color)",
              }}
            >
              Cancel
            </Button>
          </div>
        </ClickAwayListener>
      </Dialog>
    </>
  );
}
