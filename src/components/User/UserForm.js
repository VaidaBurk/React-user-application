import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./UserForm.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnetredAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnetredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({title: "Invalid input", message: "Please enter a valid name and age (non-empty values)."});
      return;
    }

    if (+enteredAge < 1) {
      setError({title: "Invalid age", message: "Please enter a valid age (> 0)."});
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnetredAge("");
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
                value={enteredUsername}
                onChange={usernameChangeHandler}
              ></input>
            </div>
            <div>
              <label htmlFor="age">Age (Years)</label>
              <input
                id="age"
                type="number"
                step="1"
                value={enteredAge}
                onChange={ageChangeHandler}
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
