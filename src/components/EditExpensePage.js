import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = ({ expense, dispatch, history, match }) => (
  <div>
    <ExpenseForm
      expense={expense}
      onSubmit={expense => {
        dispatch(editExpense({ id: match.params.id, updates: expense }));
        history.push('/');
      }}
    />
    <button
      onClick={() => {
        dispatch(removeExpense({ id: match.params.id }));
        history.push('/');
      }}
    >
      Remove expense
    </button>
  </div>
);

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditExpensePage);
