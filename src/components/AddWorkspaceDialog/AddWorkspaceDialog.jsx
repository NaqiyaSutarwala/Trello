import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import {
  addWorkSpace,
  updateWorkspace,
} from "../../store/slice/Workspace/workspaceSlice";
import { useState } from "react";

export default function AddWorkSpaceDialog({
  setOpenAddWorkspace,
  show,
  type,
  setOpenEditWorkspaceTitle,
  setOpenEditListDialog,
  workspaceId,
}) {
  const [workspaceTitle, setWorkspaceTitle] = useState("");

  const { currentUserId } = useSelector((store) => {
    return store.user;
  });

  const dispatch = useDispatch();

  const handleAddWorkspace = () => {
    dispatch(addWorkSpace({ userId: currentUserId, workspaceTitle }));
    setOpenAddWorkspace(false);
  };

  const handleUpdateWorkspace = () => {
    dispatch(updateWorkspace({ workspaceId, workspaceTitle }));
    setOpenEditWorkspaceTitle(false);
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
            setOpenAddWorkspace(false);
          }}
        >
          <div>
            <DialogTitle
              style={{ textAlign: "center" }}
              id="alert-dialog-title"
            >
              {type === "update" ? "Update" : "Create"} Workspace
            </DialogTitle>
            <DialogContent>
              <TextField
                onBlur={(e) => {
                  setWorkspaceTitle(e.target.value);
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
                type === "add" && handleAddWorkspace();
                type === "update" && handleUpdateWorkspace();
              }}
              variant="contained"
              style={{
                minWidth: "405px",
                margin: "20px",
                marginTop: "0",
                backgroundColor: "var(--header-color)",
              }}
            >
              {type === "add" ? "Create" : "Update"}
            </Button>

            {type === "update" && (
              <>
                <br />
                <Button
                  onClick={() => {
                    setOpenEditWorkspaceTitle(false);
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
              </>
            )}
          </div>
        </ClickAwayListener>
      </Dialog>
    </>
  );
}
