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

// Dispatching expenses
const expenseOne = store.dispatch(
  addExpense({
    amount: 100,
    description: 'Rent',
    createdAt: -21000
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

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate());
store.dispatch(setEndDate());
