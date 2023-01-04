import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState();
  const [enteredAge, setEnetredAge] = useState();

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnetredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().lenght === 0 || enteredAge.trim().lenght === 0) {
        alert("Please enter valid values.")
        return;
    }

    if (+enteredAge < 1){
        return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnetredAge("");
  };

  return (
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
  );
};

export default UserForm;
