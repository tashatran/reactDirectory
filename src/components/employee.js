import React from "react";
import "./style.css";
import Form from "./form";

function employee (props) {
  //Condition if statement and Map function to loop through array

 

  return (
    <div>
      {props.employeeList.length ? (
        <ul className="list-group">
          <h2>Employee Directory</h2>
        <input
          {props.employeeList.map(result => (
            <li className="list-group-item" key={result.id}>
              <b>{result.firstName}</b> {result.lastName} {result.email} {result.dateOfBirth}
            </li>
          ))}
        </ul >
      ) : (
          <h2>Sorry No Employee by that name</h2>
        )}
    </div>
  )
}

export default employee;