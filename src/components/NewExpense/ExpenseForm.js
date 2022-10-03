import React ,{useState,useEffect} from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
    const  [title,setTitle] =useState('');
    const  [price,setPrice] =useState('');
    const  [date,setDate] =useState(''); //destructuring
     
   // const [userInput ,setUserInput] = useState({
     // title: "",
      //price: " ",
      //date: " "
    //});
    //const  [products,setProducts] =useState([{title,price,date}]);
    //products= {title,price,date};
    //useEffect(() => {
    // localStorage.setProducts('products', JSON.stringify(products));
   // },[products]);

 
 const titleChangeHandler =(event) =>{
  setTitle(event.target.value);
  // setUserInput((userInput)=>{
  //   return {
  //     ...userInput,
  //     title :event.target.value
  //   };
  //   });

 };

 const priceChangeHandler =(event) =>{
  // setUserInput((userInput)=>{
  //   return {
  //     ...userInput,
  //     title :event.target.value
  //   };
  //   });
  setPrice(event.target.value);
 };

 
 const dateChangeHandler =(event) =>{
  // setUserInput((userInput)=>{
  //   return {
  //     ...userInput,
  //     title :event.target.value
  //   };
  //   });
  setDate(event.target.value)
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  const expenseData={
  title :title,
  price : +price,
  date :new Date(date)
  };
// two 
setDate('');
setPrice('');
setTitle('');

props.OnSaveExpense(expenseData);
 
};
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title}
          onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" 
          min="1" step="0.1" 
          value={price}
            onChange={priceChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date"
           min="2019-01-01" 
           max="2022-12-31"
          value={date}
            onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" >Add Expense</button>
      </div>
    </form>
    
  );
};

export default ExpenseForm;