import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BackArrow from "../../images/arrow-left.svg";
import { Input, Upload, message, Button } from "antd";
import { Card } from "react-bootstrap";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import Editor from "../components/Editor";

const NameDetails = props => {
  const history = useHistory();

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
    props.handleImage(info.file);
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
  };
  //-----------------------------------------//

  const handleChange = e => {
    const { name, value } = e.target;
    const info = props.nameData;
    info[name] = value;
    props.handleNameDetails(info);
  };

  return (
    <>
      <div className="name-details" style={{ marginTop: "20px" }}>
        <div
          className="support-button-section"
          style={{ width: "100%", padding: "0px" }}
        >
          <Button
            className="cps-form-backButton"
            onClick={() => history.push("/register_step4")}
            style={{ background: "#ffffff" }}
          >
            <img src={BackArrow} alt="back-arrow-left" /> Back
          </Button>
        </div>
        <Card style={{ width: "850px" }} body>
          <div className="input-form">
            <p className="input-instruction">Write the name of your program</p>
            <Input
              name="program_name"
              className="Form-input"
              type="name"
              placeholder="Eg. vulnerability spot"
              onChange={e => handleChange(e)}
            />
            <p className="input-instruction">Add a Tagline</p>
            <Input
              name="tagline"
              className="Form-input"
              type="name"
              placeholder="Eg. Securing out cloud services"
              onChange={e => handleChange(e)}
            />
          </div>

          <div className="add-program-details">
            <p className="input-instruction">Add Program details</p>
            <Editor name="description" onChange={e => handleChange(e)} />
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
        </Card>
        <div
          className="footer-button"
          style={{ width: "100%", float: "right" }}
        >
          <Button
            className="program-continue"
            style={{ float: "right" }}
            onClick={() => props.handleTab(2)}
          >
            Continue
          </Button>
        </div>
      </div>
    </>
  );
};
export default NameDetails;
