import React, { useState } from "react";
import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";

const App = () => {

  const [users, setUsers] = useState([]);

  const addUserHandler = user => {
    setUsers(prevUsers => {
      return [user, ...prevUsers];
    });
  }

  return (
    <div>
      <UserForm onAddUser={addUserHandler}></UserForm>
      <UserList items={users}></UserList>
    </div>
  )
}

export default App;
