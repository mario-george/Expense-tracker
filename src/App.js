import Card from './Card';
import { useState, useEffect } from 'react';
import Expenses from './Expenses';
import NewExpense from './NewExpense';
import FilteredExpenses from './FilteredExpenses';
import ItemsCtxProvider from './itemsCtxProvider';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Radio',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Wooden Desk ',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
export default function App() {
  const [filter, setFilter] = useState();
  const [filteredarray, setFilteredarray] = useState([]);
  const [filterfromapp, setFilterFromApp] = useState('2022');
  const SelectFilterHandler = (passed) => {
    setFilterFromApp(passed);
  };

  const [items, setItems] = useState(DUMMY_EXPENSES);

  const CreateExpense = (passed) => {
    setItems((PrevState) => {
      return [passed, ...PrevState];
    });
    // const expensedata={
    //   ...passed
    // }
    // console.log(expensedata)
    // console.log('in app.js')
    // }
  };
  return (
    
      
      <Card className=" text-9xl font-bold  ">
        <FilteredExpenses.Provider
          value={{
            filteredarray: filteredarray,
            setFilteredarray: setFilteredarray,
            filter: filter,
            setFilter: setFilter,
          }}>
          <NewExpense
            onSelectapp={SelectFilterHandler}
            onCreateExpense={CreateExpense}
          />
          <Expenses filter={filterfromapp} items={items} />
        </FilteredExpenses.Provider>
      </Card>
  );
}
