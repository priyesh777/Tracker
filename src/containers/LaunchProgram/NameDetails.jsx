import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
import { Input, Upload, message } from "antd";
import { Card } from "react-bootstrap";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import Editor from "../components/Editor";

const NameDetails = props => {
  const [programData, setProgramData] = useState({
    program_name: "",
    tagline: "",
    description: "",
    logo: {}
  });

  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  //------------- For upload-image------//
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const beforeUpload = file => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleUpload = info => {
    console.log("Uploaded info ::", info);
    const tempState = info.file;

    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      setLoading(false);
      setUploaded(true);
      message.success("file uploaded");
    } else if (info.file.status === "error") {
      setLoading(false);
      message.error("file upload failed");
    }

    setProgramData({ logo: tempState });
  };
  //-----------------------------------------//

  const handleInput = e => {
    const { name, value } = e.target;
    setProgramData({ ...programData, [name]: value });
    console.log("values in local state ::::", programData);
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
            <Upload
              name="logo"
              listType="picture-card"
              customRequest={dummyRequest}
              className="avatar-uploader"
              showUploadList={true}
              beforeUpload={beforeUpload}
              onChange={handleUpload}
            >
              {uploaded ? null : uploadButton}
            </Upload>
          </div>
          <div className="upload-button">
            <p className="add-icon">Add an icon</p>
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
