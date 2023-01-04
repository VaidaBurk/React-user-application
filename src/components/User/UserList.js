import React from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <UserItem username={user.username} age={user.age} key={user.id} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;