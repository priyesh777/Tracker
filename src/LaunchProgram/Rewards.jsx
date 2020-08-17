import React from "react";
// import { Link, useHistory } from "react-router-dom";
import { Input } from "antd";
import { Card } from "react-bootstrap";

const Rewards = () => {
  return (
    <div className="Rewards" style={{ marginTop: "20px" }}>
      <Card style={{ width: "850px" }} body>
        <p
          className="reward-header"
          style={{ fontWeight: "bold", fontFamily: "Karla" }}
        >
          Rewards
        </p>
      </Card>
    </div>
  );
};
export default Rewards;
