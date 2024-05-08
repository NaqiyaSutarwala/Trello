import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentWorkspace } from "../../ListsSlice";

const BoardLists = ({ boardTitle, id }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      style={{
        height: 100,
        width: 265,
        borderRadius: 10,
        backgroundColor: "#091e4224",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => {
        console.log(id);
        dispatch(currentWorkspace(id));
        navigate(`/workspace/${id}`);
      }}
    >
      {boardTitle}
    </div>
  );
};

export default BoardLists;
