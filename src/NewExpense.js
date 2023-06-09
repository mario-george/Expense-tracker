import ExpenseForm from './ExpenseForm';
export default function NewExpense(props) {
  const SelectFilterHandler=(passed)=>{
    props.onSelectapp(passed)
      }
  const saveExpenseHandler = (passed) => {
    const expensedata = {
      ...passed,
      id: Math.random().toString(),
    };
    props.onCreateExpense(expensedata);
  };
  return (
    <div>
      <ExpenseForm onSelect={SelectFilterHandler} onSaveExpenseItem={saveExpenseHandler} />
    </div>
  );
}
//statefull components is components which have states dumb components doesnt have any
