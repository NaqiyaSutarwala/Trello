import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./WorkspaceCard.module.css";
import {
  currentWorkspace,
  deleteWorkspace,
} from "../../store/slice/Workspace/workspaceSlice";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddWorkSpaceDialog from "../AddWorkspaceDialog/AddWorkspaceDialog";
import { deleteListsOnDeletingWorkspace } from "../../store/slice/Lists/listsSlice";

const WorkspaceCard = ({ workspace, id }) => {
  const [openEditWorkspaceTitle, setOpenEditWorkspaceTitle] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className={styles.mainDiv}>
      {openEditWorkspaceTitle && (
        <AddWorkSpaceDialog
          show={openEditWorkspaceTitle}
          type="update"
          setOpenEditWorkspaceTitle={setOpenEditWorkspaceTitle}
          workspaceId={workspace.workspaceId}
        />
      )}
      <div
        style={{
          height: "90px",
          width: "300px",
        }}
        className={styles.workSpaceCard}
        onClick={() => {
          dispatch(currentWorkspace(id));
          navigate(`/workspace/${id}`);
        }}
      >
        {workspace.workspaceTitle}
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          right: 10,
          bottom: 10,
          width: "60px",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <ModeEditIcon
          className={styles.editIcon}
          onClick={() => {
            setOpenEditWorkspaceTitle(true);
          }}
        />
        <DeleteIcon
          className={styles.deleteIcon}
          onClick={() => {
            dispatch(deleteWorkspace(workspace.workspaceId));
            dispatch(deleteListsOnDeletingWorkspace(workspace.workspaceId));
          }}
        />
      </div>
    </div>
  );
};

export default WorkspaceCard;
