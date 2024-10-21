import { Avatar } from "antd";
import React from "react";
import { formatNumber } from "../../tools/formatter";
import { useNavigate } from "react-router-dom";

function UserCard({ item }) {
  const navigate = useNavigate();

  var switch_to_profile = () => {
    navigate(`/profile/${item.cid}`);
  };
  return (
    <li onClick={switch_to_profile} className="user_card">
      <Avatar
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        src={item.image}
      />
      <div className="ds_flex user_card_name">
        <h4> {item.name} </h4>
        {item.verified && (
          <img src={require("./../../assets/verified.png")} width={20} />
        )}{" "}
      </div>
      <div className="ds_flex user_card_info">
        <span> {formatNumber(item.usersCount)} followers</span>
        <span> {formatNumber(item.avgLikes) || "-"} Likes</span>
        <span> {formatNumber(item.avgComments) || "-"} Comments</span>
      </div>
    </li>
  );
}

export default UserCard;
