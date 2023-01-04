import React, { useState } from "react";
import AddButton from "../UI/AddButton";
import Card from "../UI/Card";

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

    if (enteredUsername.trim() === "" || enteredAge === "") {
        alert("Please enter valid values.")
        return;
    }

    const newUser = {
      username: enteredUsername,
      age: enteredAge,
    };

    console.log(newUser);
    props.onAddUser(newUser);
    setEnteredUsername("");
    setEnetredAge("");
  };

  return (
    <Card>
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
                min="0"
                step="1"
                value={enteredAge}
                onChange={ageChangeHandler}
            ></input>
            </div>
        </div>
        <AddButton buttonname={'Add User'}></AddButton>
        </form>
    </Card>
  );
};

export default UserForm;
