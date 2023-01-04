import React, { useState } from "react";
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
    <div>
      <UserForm onAddUser={addUserHandler}></UserForm>
      <UserList users={users}></UserList>
    </div>
  )
}

export default App;
