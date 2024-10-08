import React, { useContext } from "react";
import { Link } from "react-router-dom";

//functions
import { shortedTitle } from "../../helpers/functions";

//context
import { cartContext } from "../../context/CartContextProvider";

//icons
import trashIcon from "../../assets/svg/trash.svg";

//styles
import styles from "./styles/Card.module.css";

const Card = ({ cardData }) => {
  const { dispatch } = useContext(cartContext);
  return (
    <div className={styles.card}>
      <div className={styles.detailsContainer}>
        <Link
          to={`/products/${cardData.id}`}
          className={styles.imageContainer}
          title={cardData.title}
        >
          <img src={cardData.image} alt="product" />
        </Link>
        <h3 title={cardData.title}>{shortedTitle(cardData.title)}</h3>
      </div>
      <div className={styles.fee}>
        <p className={styles.price}>{cardData.price} $</p> *{" "}
        <span>{cardData.countity}</span> :{" "}
        <p>{cardData.countity * cardData.price} $</p>
      </div>
      <div className={styles.buttonContainer}>
        {cardData.countity === 1 && (
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: cardData })}
          >
            <img src={trashIcon} alt="trash" />
          </button>
        )}
        {cardData.countity > 1 && (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: cardData })}
          >
            -
          </button>
        )}
        <span>{cardData.countity}</span>
        <button
          onClick={() => dispatch({ type: "INCREASE", payload: cardData })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
