import React from "react";
import UserCard from "../elements/UserCard";
import "./../../styles/user_list.css"
function UsersList({ query , value}) {
  return (
    <div>
    {value && value.length &&   <h4>Your search for: {value} </h4>}
    <ul className="user_list_container">
      {query.map((item, index) => {
        return <UserCard key={index} item={item} />;
      })}
    </ul>
    </div>
  );
}

export default UsersList;
