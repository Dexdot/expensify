import moment from 'moment';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../../actions/filters';

test('should setup text filter action object with the given value', () => {
  const action = setTextFilter('dota');

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'dota'
  });
});

test('should setup text filter action object with the default value', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should setup sort by date action object', () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
  });
});

test('should setup sort by amount action object', () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
  });
});

test('should setup start date action object', () => {
  const action = setStartDate(moment(322));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(322)
  });
});

test('should setup end date action object', () => {
  const action = setEndDate(moment(228));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(228)
  });
});
