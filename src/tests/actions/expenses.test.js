import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup add expense action object with the given values', () => {
  const action = addExpense({ amount: 1377, description: 'compendium2018' });

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      note: '',
      amount: 1377,
      createdAt: 0,
      description: 'compendium2018'
    }
  });
});

test('should setup add expense action object with the default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      note: '',
      amount: 0,
      createdAt: 0,
      description: ''
    }
  });
});

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });

  expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: '123abc' });
});

test('should setup edit expense action object', () => {
  const action = editExpense({
    id: '322solo228',
    updates: { note: 'privet dread', amount: 322 }
  });

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '322solo228',
    updates: { note: 'privet dread', amount: 322 }
  });
});
