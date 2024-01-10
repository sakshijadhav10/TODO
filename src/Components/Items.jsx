import Todo from "./Todo";
// import { useState } from "react";
const Items = ({todoItems,onDeleteClick}) =>{
    return (
        <div className="item-container">
        {todoItems.map((item) => (
            <Todo key={item.Name} 
             todoDate ={item.dueDate} todoName={item.Name} onDeleteClick={onDeleteClick}></Todo>))}
        </div>
    );
    

}
export default Items;