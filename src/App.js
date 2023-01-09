import React, { useState, Fragment } from "react";
import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";

const App = () => {

  const [users, setUsers] = useState([]);

  const addUserHandler = (username, userAge) => {
    setUsers(prevUsers => {
      return [{username: username, age: userAge, id: Math.random().toString()},  ...prevUsers];
    });
  }

  return (
    <Fragment>
      <UserForm onAddUser={addUserHandler}></UserForm>
      <UserList users={users}></UserList>
    </Fragment>
  )
}

export default App;
