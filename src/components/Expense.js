import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const Expense = ({ id, description, amount, createdAt, dispatch }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = state => {
  expenses: state.expenses;
};

export default connect(mapStateToProps)(Expense);
