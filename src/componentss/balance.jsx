import React from 'react';


const Balance = ({ totalBalance }) => {
  return (
    <div className="balance-container">
      <h3>Total Balance</h3>
      <p className={`balance-amount ${totalBalance < 0 ? 'negative' : 'positive'}`}>
        ₹{totalBalance.toFixed(2)}
      </p>
    </div>
  );
};

export default Balance;
