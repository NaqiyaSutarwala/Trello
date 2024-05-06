import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function SimplePaper({ title }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          height: 40,
        },
      }}
    >
      <Paper
        elevation={1}
        sx={{
          borderRadius: "10px",
          padding: "10px",
          textAlign: "left",
        }}
      >
        {title}
      </Paper>
    </Box>
  );
}
