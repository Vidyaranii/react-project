import React, { useState } from 'react';


const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      alert('Please enter both title and amount!');
      return;
    }

    const newExpense = {
      id: Math.random().toString(),
      title,
      amount: parseFloat(amount),
    };

    onAddExpense(newExpense);
    setTitle('');
    setAmount('');
  };

  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
