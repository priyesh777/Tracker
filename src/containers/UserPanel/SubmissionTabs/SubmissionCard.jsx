import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Input, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Editor from "../../components/Editor";

const SubmissionCard = () => {
  // For Uploading file ......//

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const handleUpload = info => {
    if (info.file.status === "done") {
      message.success("file uploaded");
    } else if (info.file.status === "error") {
      message.error("file upload failed");
    }
  };
  //............................//

  const handleSubmission = () => {
    console.log("handled submission of the form");
  };
  return (
    <>
      <div className="program-details-card">
        <Card hoverable>
          <div className="title-description">
            <p className="card-title" style={{ marginBottom: "1%" }}>
              Vulnerability Title
            </p>
            <Input
              name="vulnerability_title"
              className="input-box"
              type="text"
              placeholder="A clear title explaining vurnerability"
            />
          </div>

          <div className="title-description" style={{ marginTop: "4%" }}>
            <p className="card-title" style={{ marginBottom: "1%" }}>
              Severity Category
            </p>
            <div className="select-box" style={{ marginRight: "5%" }}>
              <select className="select-authority" name="type">
                <option value="">-- Select --</option>
                <option value="admin" className="option">
                  High
                </option>
                <option value="moderator" className="option">
                  Medium
                </option>
                <option value="moderator" className="option">
                  Low
                </option>
              </select>
            </div>
          </div>

          <div className="title-description" style={{ marginTop: "4%" }}>
            <p className="card-title" style={{ marginBottom: "1%" }}>
              Target
            </p>
            <Input
              name="target"
              className="input-box"
              type="text"
              placeholder="Mention the target "
            />
          </div>

          <div className="title-description" style={{ marginTop: "4%" }}>
            <p className="card-title" style={{ marginBottom: "1%" }}>
              URL of the vulnerability
            </p>
            <Input
              name="target"
              className="input-box"
              type="text"
              placeholder="https:// "
            />
          </div>

          <div className="title-description" style={{ marginTop: "4%" }}>
            <p className="card-title" style={{ marginBottom: "1%" }}>
              Vulnerability Details
            </p>
            <Editor name="vulnerability_details" />
          </div>

          <div className="title-description" style={{ marginTop: "4%" }}>
            <p className="card-title" style={{ marginBottom: "1%" }}>
              Impact by that Vulnerability
            </p>
            <Editor name="vulnerability_details" />
          </div>

          <div className="title-description" style={{ marginTop: "4%" }}>
            <p className="card-title">Attach a file</p>
            <p className="instruction" style={{ marginTop: "0px" }}>
              Attach your proof of work. This might include screenshots, videos,
              images, etc. Please keep your individual uploads less than 100mb.
              <p style={{ marginTop: "2%" }}>
                <Upload
                  type="file"
                  name="logo"
                  customRequest={dummyRequest}
                  className="avatar-uploader"
                  showUploadList={true}
                  onChange={handleUpload}
                >
                  <Button icon={<UploadOutlined />}> Upload</Button>
                </Upload>
              </p>
              <p className="instruction" style={{ marginTop: "2%" }}>
                You can attach upto 5 Files at a time
              </p>
              <p className="instruction">
                By Submitting, you agree to our{" "}
                <Link to="###" className="link-words">
                  terms and conditions
                </Link>{" "}
              </p>
            </p>
          </div>
        </Card>
      </div>
      <div className="footer-button" style={{ width: "100%", margin: "0px" }}>
        <Button
          className="program-continue"
          onClick={handleSubmission}
          style={{ float: "right", marginBottom: "20px" }}
        >
          Submit
        </Button>
      </div>
    </>
  );
};
export default SubmissionCard;
