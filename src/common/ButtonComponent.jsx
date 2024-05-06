import { Button } from "@mui/material";
import React from "react";

const ButtonComponent = ({ onClick, variant, sx, className, children }) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      sx={sx}
      className={className}
    >
      {children}
    </Button>
  );
};

export default ButtonComponent;
