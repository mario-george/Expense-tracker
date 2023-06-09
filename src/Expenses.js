import ExpenseItem from './ExpenseItem';
import { useState, useEffect, useContext } from 'react';
import FilterExpensesarray from './FilteredExpenses';
//if you have an array of jsx elements in jsx code in {to type js expressions} react will render it side by side {[<Card />,<Card />]}
export default function Expenses(props) {
  const ctx = useContext(FilterExpensesarray);
  //giving each item a key(if yo dont it would be a perf issue/run into a bug) if you didnit treats all items as the same and it adds the item to the last but with keys it acts as expected
  // const filteredArray=props.items.filter((e)=>{return (e.date.getFullYear().toString()==props.filter)})

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() == props.filter;
  });


useEffect(()=>{

  ctx.setFilteredarray(filteredExpenses);

},[props.filter,ctx.filter])

  // useEffect(() => {
  //   array.forEach((e, i) => {
  //     if (e.date.getFullYear() == props.filter) {
  //       return console.log(`${e} not rmoved`);
  //     } else dummy.splice(i, 1);
  //   });

  //   console.log(dummy.length);
  //   console.log(dummy);
  //   setLength(dummy.length);
  // }, [props.filter]);
  const nodatamsg = (
    <h1 className="font-bold text-3xl text-center mt-[20px] h-[60px]">
      Found No Expenses
    </h1>
  );

  //alternative method
  // let expensitems = <h1>No data for the selected year</h1>;
  // if (filteredExpenses.length > 0) {
  //   expensitems = filteredExpenses.map((e) => {
  //     return (
  //       <ExpenseItem
  //         key={e.id}
  //         title={e.title}
  //         amount={e.amount}
  //         date={e.date}
  //       />
  //     );
  //   });
  // }
  return (
    <div>
      {filteredExpenses.length > 0
        ? filteredExpenses.map((e) => {
            return (
              <ExpenseItem
                key={e.id}
                title={e.title}
                amount={e.amount}
                date={e.date}
              />
            );
          })
        : nodatamsg}
      {/* {expensitems} */}
    </div>
  );
}
