import moment from 'moment';
import filtersReducer from '../../reducers/filters';

const defaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual(defaultState);
});

test('should set text filter', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'solo'
  });

  expect(state.text).toBe('solo');
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  });

  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const state = filtersReducer(undefined, {
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  });

  expect(state.sortBy).toBe('date');
});

test('should set startDate', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_START_DATE',
    startDate: moment(2)
  });

  expect(state.startDate).toEqual(moment(2));
});

test('should set endDate', () => {
  const state = filtersReducer(undefined, {
    type: 'SET_END_DATE',
    endDate: moment(6)
  });

  expect(state.endDate).toEqual(moment(6));
});
