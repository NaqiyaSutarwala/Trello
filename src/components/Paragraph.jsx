import React from "react";

const Paragraph = ({ children, style }) => {
  return <p className={style}>{children}</p>;
};

export default Paragraph;
