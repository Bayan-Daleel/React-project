import './App.css';
import React from "react";
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const App=() => {
  const products = [
    {
      id:'e1',
      title:'BWM cAR',
      price:20000,
      date:new Date(2022,1,1),
  },
  
  {
    id:'e2',
    title:'BWM cAR',
    price:20000,
    date:new Date(2022,1,1),
},
{
  id:'e3',
  title:'Ode cAR',
  price:20000,
  date:new Date(2022,1,1),
},
{
  id:'e4',
  title:'Tesla cAR',
  price:20000,
  date:new Date(2022,1,1),
},
  ];

  return (
//  return React.createElement("div", {className: "App"}, "hellosssssssword");
  <div>
    <NewExpense/>
  <Expenses products={products}/>
    </div>
  );
}

export default App;
