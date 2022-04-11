import React from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <div>
      <div className="new-expense">
        <ExpenseForm />
      </div>
    </div>
  );
};

export default NewExpense;
