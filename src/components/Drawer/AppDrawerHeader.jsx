import React from "react";
import { DrawerHeader } from "../../func/DrawerDefaultFunctions";
import { IconButton } from "@mui/material";
import styles from "./AppDrawerHeader.module.css";
import { useTheme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const AppDrawerHeader = ({ handleDrawerClose }) => {
  const theme = useTheme();

  return (
    <DrawerHeader>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={styles.boardInitialDiv}>T</div>
        <div className={styles.trelloLogo}>Trello</div>
      </div>
      <IconButton
        onClick={handleDrawerClose}
        sx={{
          backgroundColor: "#ffe5fd75",
          padding: "0px",
        }}
      >
        {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </IconButton>
    </DrawerHeader>
  );
};

export default AppDrawerHeader;
