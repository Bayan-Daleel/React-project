import './NewExpense'
import ExpenseForm from './ExpenseForm';
const NewExpense=(props) => {
const saveExpenseDataHundler =(enterdExpenseData)=>{
const expenseData = {
  ...enterdExpenseData,
  id: Math.random().toString(),
};
props.onAddExpense(expenseData);
}
return (
    <div className="new-expense">
     <h2>Add New Expense</h2>
      <ExpenseForm OnSaveExpense ={saveExpenseDataHundler}/>
    </div>
)
};

export default NewExpense;