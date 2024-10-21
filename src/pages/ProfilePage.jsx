import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetch_user_info } from "../services/APICalls";
import UserName from "../components/elements/UserName";
import "./../styles/profile.css";
import InfoCard from "../components/elements/InfoCard";
import GraphIndex from "../components/graphs/GraphIndex";
function ProfilePage() {
  let { id } = useParams();
  var [user, setUser] = useState(null);
  var fetch_data = () => {
    setUser(fetch_user_info(id));
  };

  useEffect(() => {
    fetch_data();
  }, [id]);

  return (
    <div>
      <UserName item={user} />
      <GraphIndex item={user} />
    </div>
  );
}

export default ProfilePage;
