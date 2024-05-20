import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import "../../stylesheet/global.css";
import {
  DrawerHeader,
  AppBar,
  Drawer,
} from "../../func/DrawerDefaultFunctions";
import { Outlet } from "react-router-dom";
import AppDrawerHeader from "../../components/Drawer/AppDrawerHeader";
import DrawerOptionsList from "../../components/Drawer/DrawerOptionsList";

export default function BoardPage() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <NavigationBar handleDrawerOpen={handleDrawerOpen} open={open} />
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "var(--header-color)",
            color: "black",
          },
          "& .css-1r9jet7": {
            minHeight: "50px",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "var(--header-color)",
          },
        }}
      >
        <AppDrawerHeader handleDrawerClose={handleDrawerClose} />
        <Divider />
        <DrawerOptionsList open={open} />
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "var(--background-color)",
        }}
      >
        <DrawerHeader />
        <div
          style={{
            height: "84.5vh",
          }}
        >
          <Outlet />
        </div>
      </Box>
    </Box>
  );
}
