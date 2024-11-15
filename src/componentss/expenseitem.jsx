import React from 'react';

const ExpenseItem = ({ expense }) => {
  return (
    <div className="expense-item">
      <div>{expense.description}</div>
      <div>${expense.amount.toFixed(2)}</div>
      <div>{new Date(expense.date).toLocaleDateString()}</div>

    </div>
  );
};

export default ExpenseItem;
