import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Input, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Editor from "../../components/Editor";
import { GetApi, PostApi } from "../../../api/callapi";
import { SubmissionForm } from "../../../api/endpoints";

const SubmissionCard = props => {
  //---For Uploading file -------------------//
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  // const [pictures, setPictures] = useState({});

  const handleUpload = info => {
    if (info.file.status === "done") {
      message.success("file uploaded");
    } else if (info.file.status === "error") {
      message.error("file upload failed");
    }
  };
  //--------------------------------------------------------------//

  const [report, setReport] = useState({
    title: "",
    description: "",
    target: "",
    url: "",
    severity: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    const info = report;
    info[name] = value;
    setReport(info);
  };

  const handleSubmission = async e => {
    const url = SubmissionForm;
    console.log("Url check :::%%", url);
    const response = await PostApi(url);

    if (response.status === 200) {
      let responseData = response.data;
      console.log("Response from report submission:::", responseData);
      message.success("Report Submitted");
    } else {
      message.error("Report Submission Failed");
    }
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
              name="title"
              className="input-box"
              type="text"
              placeholder="A clear title explaining vurnerability"
              onChange={e => handleChange(e)}
            />
          </div>

          <div className="title-description" style={{ marginTop: "4%" }}>
            <p className="card-title" style={{ marginBottom: "1%" }}>
              Severity Category
            </p>
            <div className="select-box" style={{ marginRight: "5%" }}>
              <select
                className="select-authority"
                name="severity"
                onChange={e => handleChange(e)}
              >
                <option value="">-- Select --</option>
                <option value="high" className="option">
                  High
                </option>
                <option value="medium" className="option">
                  Medium
                </option>
                <option value="low" className="option">
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
              placeholder="Mention the target"
              onChange={e => handleChange(e)}
            />
          </div>

          <div className="title-description" style={{ marginTop: "4%" }}>
            <p className="card-title" style={{ marginBottom: "1%" }}>
              URL of the vulnerability
            </p>
            <Input
              name="url"
              className="input-box"
              type="text"
              placeholder="https:// "
              onChange={e => handleChange(e)}
            />
          </div>

          <div className="title-description" style={{ marginTop: "4%" }}>
            <p className="card-title" style={{ marginBottom: "1%" }}>
              Vulnerability Details
            </p>
            <Editor name="description" onChange={e => handleChange(e)} />
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
            </p>

            <Upload
              type="file"
              name="image"
              customRequest={dummyRequest}
              className="avatar-uploader"
              showUploadList={true}
              onChange={handleUpload}
            >
              <Button icon={<UploadOutlined />}> Upload</Button>
            </Upload>

            <span className="instruction" style={{ marginTop: "2%" }}>
              You can attach upto 5 Files at a time
            </span>
            <br />
            <span className="instruction">
              By Submitting, you agree to our{" "}
              <Link to="###" className="link-words">
                terms and conditions
              </Link>{" "}
            </span>
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
