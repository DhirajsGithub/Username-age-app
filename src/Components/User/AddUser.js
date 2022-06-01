import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredage, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameInputRef = useRef(); // initial value is null
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    event.preventDefault();

    // console.log(nameInputRef)
    // {current: input#username}  // the whole object containing the entire element of input for username
    const enteredUsernameRef = nameInputRef.current.value;
    const enteredAgeRef = ageInputRef.current.value;



    // if (enteredUsername.trim().length === 0 || enteredage.trim().length === 0) {
    if (enteredUsernameRef.trim().length === 0 || enteredAgeRef.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    // entered age is in string it won't be that difficult fot .js to compare string number and number
    // When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false
    // if (enteredage < 1) {
    if (enteredAgeRef < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    
    // console.log(enteredUsername, enteredage);
    props.onAddUsers(enteredUsernameRef, enteredAgeRef);
    nameInputRef.current.value = '';      // it will work fine but we shouldn't be doing this we should use state for this
    ageInputRef.current.value = '';
    // setEnteredUsername("");
    // setEnteredAge("");
  };
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  const handleOnConfirm = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {/* note that how we didn't pass any initial value to the error that brigns error to be false initally as soon as if block hit setError get triggle and hence the ErrorModule  */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={handleOnConfirm}
        />
      )}
      {/* // note to add classes from this component classes to the component which is wrapped around by some other component we need to specify the 'className' in the wrapped component */}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            type="text"
            id="username"
            ref={nameInputRef}
            // using refs here making it the uncontrolled component as we are not able to change value of the input field with react
            // we are just making it happen to chaning the value of ref 
          />
          <label htmlFor="age">Age</label>
          {/* anything which retrive in the input is set as string  */}
          <input
            // value={enteredage}
            // onChange={ageChangeHandler}
            type="number"
            id="age"
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

/*

jsx limitations --> You can't return more than one root jsx element you also can't store more than one root jsx element in a variable
the solution --> always wrap adjacent element with div or any element 
returning an array of elements will also do the trick, but need to add a specific key to each returning element
A new problem --> div soup --> by wrapping means we some time end with unnecessary wrapping div's which will make our programming slower to render such unnecessary element and sometimes can affect our wrappig style

refs in react --> another react hooks, react hooks only work inside the component function
Refs are a function provided by React to access the DOM element and the React element that you might have created on your own. They are used in cases where we want to change the value of a child component, without making use of props and all.
when you only want to read value and you don't need to change the value the use useRef();
Avoid using refs for anything that can be done declaratively.

*/
