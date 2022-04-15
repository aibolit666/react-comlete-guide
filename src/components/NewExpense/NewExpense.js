import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsFormOpen(false);
  };

  const startFormOpenHandler = () => {
    setIsFormOpen(true);
  };

  const stopFormOpenHandler = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <div className="new-expense">
        {!isFormOpen && (
          <button onClick={startFormOpenHandler} type="button">
            Add expense
          </button>
        )}
        {isFormOpen && (
          <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={stopFormOpenHandler}
          />
        )}
      </div>
    </div>
  );
};

export default NewExpense;
