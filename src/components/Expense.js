import React from 'react';
import { Link } from 'react-router-dom';

const Expense = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <h3>
      <Link to={`/edit/${id}`}>{description}</Link>
    </h3>
    <p>
      {amount} - {createdAt}
    </p>
  </div>
);

export default Expense;
