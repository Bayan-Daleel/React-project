import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
const Expenses=(props)=> {
  return(
  <Card className="expenses">
    <h1>lets started</h1>
    <ExpenseItem
      title={props.products[0].title}
      price={props.products[0].price}
      date={props.products[0].date}
    ></ExpenseItem>
    <ExpenseItem
      title={props.products[1].title}
      price={props.products[1].price}
      date={props.products[1].date}
    />
    <ExpenseItem
      title={props.products[2].title}
      price={props.products[2].price}
      date={props.products[2].date}
    />
    <ExpenseItem
      title={props.products[3].title}
      price={props.products[3].price}
      date={props.products[3].date}
    />
  </Card>
  );
}
export default Expenses;
