import React, { useContext } from "react";
import { TransactionItem } from "./TransactionItem";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <>
      {transactions.length < 1 ? (
        ""
      ) : (
        <>
          <h3>History</h3>
          <ul className="list">
            {transactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                id={transaction.id}
                text={transaction.text}
                amount={transaction.amount}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};
