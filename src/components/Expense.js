import React from 'react';

const Expense = ({ description, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
    <br />
  </div>
);

export default Expense;
