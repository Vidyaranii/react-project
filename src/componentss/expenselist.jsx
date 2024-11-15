import React from 'react';
import ExpenseItem from './expenseitem';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))
      )}
    </div>
  );
};

export default ExpenseList;
