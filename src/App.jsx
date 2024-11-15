import React, { useState } from 'react';
import LoginForm from './componentss/login';
import ExpenseForm from './componentss/expenseform';
import ExpenseList from './componentss/expenselist';

import Balance from './componentss/balance';

import './App.css';




const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [expenses, setExpenses] = useState([]);

  // Calculate total balance
  const calculateTotalBalance = () => {
    return expenses.reduce((total, expense) => total + Number(expense.amount), 0);
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className={`app ${isLoggedIn ? 'app-logged-in' : ''}`}>
      {!isLoggedIn ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <>
          <Balance totalBalance={calculateTotalBalance()} />
          <h2>Expense Tracker</h2>
          <ExpenseForm onAddExpense={addExpenseHandler} />
          <ExpenseList expenses={expenses} />
        </>
      )}
    </div>
  );
};

export default App;

