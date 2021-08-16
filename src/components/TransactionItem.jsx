import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import db from "../db/localbase";

export const TransactionItem = ({ text, amount, id }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const onClickHandler = (id) => {
    db.collection("expenses").doc({ id: id }).delete();
    deleteTransaction(id);
  };

  const sign = amount < 0 ? "-" : "+";
  return (
    <>
      <li className={sign === "-" ? "minus" : "plus"}>
        {text}{" "}
        <span>
          {sign}${Math.abs(amount)}
        </span>
        <button className="delete-btn" onClick={() => onClickHandler(id)}>
          x
        </button>
      </li>
    </>
  );
};
