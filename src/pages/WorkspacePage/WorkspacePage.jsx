import { Button } from "@mui/material";
import React, { useState } from "react";
import styles from "./WorkspacePage.module.css";
import "../../stylesheet/global.css";
import { useSelector } from "react-redux";
import AddWorkSpaceDialog from "../../components/AddWorkspaceDialog/AddWorkspaceDialog";
import WorkspaceCard from "../../components/Workspace Card/WorkspaceCard";

const WorkspacePage = () => {
  const [openAddWorkspace, setOpenAddWorkspace] = useState(false);
  const { currentUserId } = useSelector((store) => {
    return store.user;
  });

  const { workspace } = useSelector((store) => {
    return store.workspace;
  });

  const allWorkspacesOfCurrentUser = workspace.filter((workspace) => {
    return workspace.userId === currentUserId;
  });

  return (
    <>
      {openAddWorkspace && (
        <AddWorkSpaceDialog
          setOpenAddWorkspace={setOpenAddWorkspace}
          show={openAddWorkspace}
          type="add"
        />
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
            setOpenAddWorkspace(true);
          }}
        >
          Add new Workspace
        </Button>

        {allWorkspacesOfCurrentUser.map((workspace) => {
          return (
            <WorkspaceCard
              key={workspace.workspaceId}
              workspace={workspace}
              id={workspace.workspaceId}
            />
          );
        })}
      </div>
    </>
  );
};

export default WorkspacePage;
