import React from "react";
import "./style.css";

function Form (props) {
  // // Setting the component's initial state
  // state = {
  //   firstName: "",
  //   lastName: ""
  // };

  // handleInputChange = event => {
  //   // Getting the value and name of the input which triggered the change
  //   let value = event.target.value;
  //   const name = event.target.name;

  //   // Updating the input's state
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();

  //   // Using this.state; Make a if/else statement to do the following
  //   // If first or last name is empty alert the user that they are empty
  //   // Else if both have values alert the user to say "Hi firstName and lastName" 
    
    
  

  //   this.setState({
  //     firstName: "",
  //     lastName: ""
  //   });
  // };

  
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
       
        <form className="form">
          <input
            value={props.firstName}
            name="firstName"
            onChange={props.handleInputChange}
            type="text"
            placeholder="First Name or Last Name"
          />
         
          <button onClick={props.handleFormSubmit}>Submit</button>
        </form>
        Please type in lowercase
        
      </div>
    );
  
}

export default Form;