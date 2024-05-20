import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import AddWorkSpaceDialog from "../AddWorkspaceDialog/AddWorkspaceDialog";
import EditListsDialog from "../EditListsDialog/EditListsDialog";
import { useDispatch } from "react-redux";
import { deleteLists } from "../../store/slice/Lists/listsSlice";

const options = ["Edit", "Delete"];

const ITEM_HEIGHT = 48;

export default function OptionsList({ list }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selected, setSelected] = useState("");
  const [openEditListDialog, setOpenEditListDialog] = useState(false);

  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setSelected("");
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (value) => {
    setSelected(value);
    setOpenEditListDialog(true);
    setAnchorEl(null);
  };

  const listId = list.listId;

  selected === "Delete" && dispatch(deleteLists(listId));

  return (
    <div>
      {selected === "Edit" && (
        <EditListsDialog
          show={openEditListDialog}
          list={list}
          setOpenEditListDialog={setOpenEditListDialog}
        />
      )}

      <IconButton
        aria-label="more"
        id="long-button"
        onClick={handleClick}
        style={{
          color: "black",
        }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            marginRight: "10px",
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={() => {
              handleClose(option);
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
