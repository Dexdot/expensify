import React from 'react';
import { connect } from 'react-redux';

import Expense from './Expense';
import selectExpenses from '../selectors/expenses';

// Дочерний компонент
const ExpenseList = props => (
  <div>
    <h2>Expense list</h2>
    {props.expenses.map((expense, i) => (
      <Expense {...expense} key={expense.id} />
    ))}
  </div>
);

// Возвращает пропсы
const mapStateToProps = state => ({
  expenses: selectExpenses(state.expenses, state.filters)
});

// HOC
export default connect(mapStateToProps)(ExpenseList);
