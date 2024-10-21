import { Statistic } from "antd";
import React from "react";

function InfoCard({ key, value }) {
  return (
    <div>
      <Statistic title={key} value={value} />
    </div>
  );
}

export default InfoCard;
