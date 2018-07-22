import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import uuid from 'uuid';

// Expenses action generators
const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    note,
    amount,
    createdAt,
    description
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id = '' } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
const editExpense = ({ id, updates } = {}) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// Filters action generators
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date'
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount'
});

const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});

const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});

const demoState = {
  expenses: [
    {
      id: '192gd821',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];

    case 'REMOVE_EXPENSE':
      return state.filter(({ id }, i) => id !== action.id);

    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', // date or amount
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };

    case 'SORT_BY_DATE':
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: action.sortBy
      };

    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };

    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };

    default:
      return state;
  }
};

// Filtering
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const startDateMatch =
      typeof startDate !== 'number' || expense.createdAt >= startDate;

    const endDateMatch =
      typeof endDate !== 'number' || expense.createdAt <= endDate;

    const textMatch = expense.description
      .toLowerCase()
      .includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  });
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

// Dispatching expenses
const expenseOne = store.dispatch(
  addExpense({
    amount: 100,
    description: 'Rent',
    createdAt: 1000
  })
);
const expenseTwo = store.dispatch(
  addExpense({
    amount: 300,
    description: 'Coffee',
    createdAt: -1000
  })
);

// store.dispatch(removeExpense({ id: expenseTwo.expense.id }));
// store.dispatch(
//   editExpense({ id: expenseOne.expense.id, updates: { amount: 1337 } })
// );

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// Dispatching filters
store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(0));
store.dispatch(setEndDate(999));
