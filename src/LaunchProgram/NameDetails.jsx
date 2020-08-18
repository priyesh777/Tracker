import React from "react";
// import { Link, useHistory } from "react-router-dom";
import { Input } from "antd";
import { Card, Button } from "react-bootstrap";
import thumbnail from "../images/thumbnail.png";

const NameDetails = () => {
  const { TextArea } = Input;

  return (
    <div className="name-details" style={{ marginTop: "20px" }}>
      <Card style={{ width: "850px" }} body>
        <div className="input-form">
          <p className="input-instruction">Write the name of your program</p>
          <Input
            className="Form-input"
            type="email"
            placeholder="Eg. vulnerability spot"
          />
          <p className="input-instruction">Add a Tagline</p>
          <Input
            className="Form-input"
            type="email"
            placeholder="Eg. Securing out cloud services"
          />
        </div>
        <div className="upload-section">
          <div className="upload-pic">
            <img src={thumbnail} alt="pro-pic" />
          </div>
          <div className="upload-button">
            <p className="add-icon">Add an icon</p>
            <Button className="white-button">upload</Button>
          </div>
        </div>
        <p className="instruction">
          JPG & PNG Only --- Ideal Resolution 400x400
        </p>
        <div className="add-program-details">
          <p className="input-instruction">Add a Program details</p>
          <TextArea rows={4} cols={3} />
        </div>
      </Card>
    </div>
  );
};
export default NameDetails;
