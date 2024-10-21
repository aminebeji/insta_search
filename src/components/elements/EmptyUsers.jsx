import { Empty } from "antd";
import React from "react";

function EmptyUsers({ value }) {
  return (
    <div className="empty_container">
      {value && value.length && (
        <h3>
          Your search for: <b> {value} </b> is empty
        </h3>
      )}
      <Empty />
    </div>
  );
}

export default EmptyUsers;
