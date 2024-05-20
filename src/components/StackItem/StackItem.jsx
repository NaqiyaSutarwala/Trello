import React, { useState } from "react";
import Card from "../Card/Card";
import AddCard from "../AddCard/AddCard";
import AddIcon from "@mui/icons-material/Add";
import ButtonComponent from "../../common/ButtonComponent";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";
import OptionsList from "../optionsList/optionsList";

const StackItem = ({ styles, list }) => {
  const [openAddCard, setOpenAddCard] = useState(false);

  const { cards } = useSelector((store) => {
    return store.cards;
  });

  const currentListCard = cards.filter((card) => {
    return list.listId === card.listId;
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "45px",
        }}
      >
        <h3 className={styles.listTitle}>{list.listTitle}</h3>
        <OptionsList list={list} />
      </div>

      <div style={{ clear: "both" }}></div>
      {currentListCard.map((card, index) => {
        return <Card key={index} title={card.cardTitle}></Card>;
      })}
      <div>
        {openAddCard ? (
          <AddCard
            setOpenAddCard={setOpenAddCard}
            currentListId={list.listId}
            type="Card"
          />
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
