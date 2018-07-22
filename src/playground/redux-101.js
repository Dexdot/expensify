import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Action generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});
const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});
const setCount = ({ count = 0 } = {}) => ({
  type: 'SET',
  count
});
const resetCount = () => ({
  type: 'RESET'
});

// Reducer
const defaultState = { count: 0 };
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };

    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };

    case 'SET':
      return { count: action.count };

    case 'RESET':
      return { count: 0 };

    default:
      return state;
  }
  return state;
};

// Create store
const store = createStore(reducer, applyMiddleware(logger));

// Dispatching
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount({ count: 322 }));
