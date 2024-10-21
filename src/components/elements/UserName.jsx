import { Avatar, Tag } from "antd";
import React from "react";
import { formatNumber, getRandomTagColor } from "../../tools/formatter";

function UserName({ item }) {
  return (
    <div className="profile_username">
      <Avatar
        size={{ xs: 34, sm: 42, md: 60, lg: 74, xl: 100, xxl: 150 }}
        src={item?.image}
        alt={item?.name}
      />
      <div className="ds_flex">
        <h4 className="user_title"> {item?.name} </h4>
        {item?.verified && (
          <img src={require("./../../assets/verified.png")} width={20} />
        )}
      </div>
      <a href={item?.url} target="_blank" className="user_tag_name">
        @{item?.screenName}{" "}
      </a>
      <p> {item?.description} </p>
      <div className="ds_flex user_card_info">
        <span> {formatNumber(item?.usersCount)} followers</span>
        <span> {formatNumber(item?.avgLikes) || "-"} Likes</span>
        <span> {formatNumber(item?.avgComments) || "-"} Comments</span>
      </div>
      <div>
        {item?.tags.map((t) => {
          return <Tag color={getRandomTagColor()}> #{t} </Tag>;
        })}
      </div>
    </div>
  );
}

export default UserName;
