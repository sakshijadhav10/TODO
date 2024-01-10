import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";

import Items from "./Components/Items";
import "./App.css";
import { useState } from "react";
import Welcomemsg from "./Components/Welcomemsg";

function App() {

const [todoItems,setTodoItems]=useState([]);
const handleNewItem=(itemName, itemDueDate) => {
 
  const newTodoItems=[...todoItems,{ Name:itemName,
  dueDate:itemDueDate}];
  
  setTodoItems(newTodoItems);
  };
   



  const handleDeleteItem = (todoItemName) =>{
    const newTodoItems= todoItems.filter(item => item.Name !== todoItemName);
    setTodoItems(newTodoItems);
    

     //console.log(`Item deleted: ${todoItemName}`);
  };
  return (
    <>
        <div className="todo-app">

        
        <center className="todo-container">
         <AppName/>
         <div className="all-items">
         <AddTodo onNewItem={handleNewItem}/>
          {todoItems.length===0 && <Welcomemsg ></Welcomemsg>}
         <Items  todoItems={todoItems} onDeleteClick={handleDeleteItem}></Items>  
 
          </div> 
         
        </center>
  </div>
  </>
  );
}

export default App;
