import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
import { Input } from "antd";
import { Card, Button } from "react-bootstrap";
import thumbnail from "../../images/thumbnail.png";
import Editor from "../components/Editor";

const NameDetails = () => {
  const [formData, setFormData] = useState({
    program_name: "",
    tagline: "",
    description: ""
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="name-details" style={{ marginTop: "20px" }}>
      <Card style={{ width: "850px" }} body>
        <div className="input-form">
          <p className="input-instruction">Write the name of your program</p>
          <Input
            name="program_name"
            className="Form-input"
            type="name"
            placeholder="Eg. vulnerability spot"
            onChange={handleInput}
          />
          <p className="input-instruction">Add a Tagline</p>
          <Input
            name="tagline"
            className="Form-input"
            type="name"
            placeholder="Eg. Securing out cloud services"
            onChange={handleInput}
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
          <Editor name="description" onChange={handleInput} />
        </div>
      </Card>
    </div>
  );
};
export default NameDetails;
