import React from "react";
import UserItem from "./UserItem";
import Card from "../UI/Card";

const UserList = (props) => {

    return (
        <Card>
        <ul>
            {props.items.map((user) => (
                <UserItem
                username={user.username}
                age={user.age}
                />
            ))}
        </ul>
        </Card>
    )
}

export default UserList;