import { useState,useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AddTodo({onNewItem}){
  // const [todoName,setTodoName]=useState("");
  // const[dueDate,setDueDate]=useState("");
  const todoNameElement=useRef();
  const dueDateElement=useRef();
  
  // const noOfUpdates=useRef(0);

  // const handleNameChange=(event)=>{
  //   setTodoName(event.target.value);
  // };
  // const handleDateChange=(event)=>{
  //   setDueDate(event.target.value);
  // };
  const handleAddButtonClicked= (event) =>{
    event.preventDefault();
    const todoName =todoNameElement.current.value;
    const dueDate =dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    onNewItem(todoName,dueDate);
    // setDueDate("");
    // setTodoName("");
  };
  
  return (
    
          // <div className={styles.container text-center}>
          <div className="container text-center">
        <form className="row kg-row" onSubmit={handleAddButtonClicked}>
          <div className="col-6">
            <input type="text"
            ref={todoNameElement}
            placeholder="Enter todo here" >
            </input>
            {/* value={todoName} onChange={handleNameChange}> */}
          </div>
          <div className="col-4">
            <input type="date"
            ref={dueDateElement}
            />
            {/* value={dueDate} onChange={handleDateChange} */}
          </div>
          <div className="col-2">
            <button type="Submit" className="btn btn-success " >
            <BiMessageAdd />

            </button>
          </div>
        </form>  
        </div>
        
    );
}
export default AddTodo;