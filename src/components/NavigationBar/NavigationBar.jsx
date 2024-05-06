import React from "react";
import styles from "./NavigationBar.module.css";
import logo from "../../assets/images/logoBndW.png";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavigationBar = ({ handleDrawerOpen, open }) => {
  return (
    <div className={styles.navBar}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          paddingLeft: 2.5,
          marginRight: 5,
          ...(open && { display: "none" }),
        }}
      >
        <MenuIcon />
      </IconButton>

      <img src={logo} alt="logo" className={styles.logo} />
    </div>
  );
};

export default NavigationBar;
