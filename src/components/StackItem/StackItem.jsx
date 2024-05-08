import React, { useState } from "react";
import SimplePaper from "../Card/Card";
import AddCard from "../AddCard/AddCard";
import AddIcon from "@mui/icons-material/Add";
import ButtonComponent from "../../common/ButtonComponent";

const StackItem = ({ styles, list }) => {
  const [openAddCard, setOpenAddCard] = useState(false);
  return (
    <div>
      <h3 className={styles.listTitle}>{list.listTitle}</h3>
      <div style={{ clear: "both" }}></div>
      {/* {list.card.length > 0 &&
        list.card.map((card, index) => {
          return <SimplePaper key={index} title={card.cardTitle}></SimplePaper>;
        })} */}
      <div>
        {openAddCard ? (
          <AddCard setOpenAddCard={setOpenAddCard} list={list} type="Card" />
        ) : (
          <ButtonComponent
            onClick={() => {
              setOpenAddCard(true);
            }}
            variant="text"
            sx={{
              width: "100%",
              color: "#4c525e",
              textTransform: "initial",
            }}
            className={styles.addCardButton}
          >
            <AddIcon sx={{ color: "#172b4d" }} />
            <span style={{ paddingLeft: "8px" }}>Add a card</span>
          </ButtonComponent>
        )}
      </div>
    </div>
  );
};

export default StackItem;
