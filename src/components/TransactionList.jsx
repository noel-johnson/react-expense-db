import React, { useContext, useEffect } from "react";
import { TransactionItem } from "./TransactionItem";

import { GlobalContext, getExpenses } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions, addTransaction } = useContext(GlobalContext);

  useEffect(() => {
    getExpenses().then((expenses) => {
      expenses.map((expense) => addTransaction(expense));
    });
  }, []);
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
