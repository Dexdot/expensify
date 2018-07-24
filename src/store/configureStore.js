import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// Store creation
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    applyMiddleware()
  );

  return store;
};
