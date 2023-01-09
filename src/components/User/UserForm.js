import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./UserForm.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({title: "Invalid input", message: "Please enter a valid name and age (non-empty values)."});
      return;
    }

    if (+enteredUserAge < 1) {
      setError({title: "Invalid age", message: "Please enter a valid age (> 0)."});
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandle = () => {
    setError(null);
  }

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandle}></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                ref={nameInputRef}
              ></input>
            </div>
            <div>
              <label htmlFor="age">Age (Years)</label>
              <input
                id="age"
                type="number"
                step="1"
                ref={ageInputRef}
              ></input>
            </div>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default UserForm;
