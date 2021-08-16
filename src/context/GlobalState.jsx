import React, { createContext, useReducer } from "react";
import Appreducer from "./Appreducer.jsx";
import db from "../db/localbase";

// Initial State

export async function getExpenses() {
  try {
    let expenses = await db.collection("expenses").orderBy("date").get();
    return expenses;
  } catch (err) {
    console.error("error: ", err);
    return [];
  }
}

const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Appreducer, initialState);

  // Actions
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
