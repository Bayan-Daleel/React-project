import React,{ useState } from 'react'; //hook //started with use
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";

const ExpenseItem=(props)=> {
  const [title, setTitle] =  useState(props.title);
  const [date, setDate] =  useState(props.date);
  const [price, setPrice] =  useState(props.price);

  //let title = props.title;
  const clickHundler =()=>{
  const newDate = new Date(2022,9,13);
  setTitle ("update value");
  setDate (newDate);
  setPrice(100);
  console.log (title);
  }
    const expenseDate = new DataTransfer(2022 ,9,3);
    const expenseTitle = 'BMW Car';
    const expensePrice = 20.000;
  
  return (
    <Card className="expense-item">
     <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h1>{title}</h1>
        <div className="expense-item__price">${price}</div>
      </div>
      <button onClick={clickHundler}>change</button>
    </Card>
  );
}
export default ExpenseItem;
