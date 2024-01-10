import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
function Todo({todoName,todoDate,onDeleteClick}){
     
  return(
    <div>
    <div className="container text-center">
    <div className="row kg-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4 ">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger kg-button" onClick={()=>onDeleteClick(todoName)}>
        <MdDeleteOutline />
        </button>
      </div>
    </div>
    </div>
    </div>
    );
}
export default Todo;