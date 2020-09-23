import React, { useState, useEffect } from "react";
import BackArrow from "../../images/arrow-left.svg";
import MainPanel from "./MainPanel";
import { Row, Col } from "react-bootstrap";
import { Button, Card, Avatar, Input, message, Upload } from "antd";
import { useHistory } from "react-router-dom";
import { UserOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { GetApi } from "../../api/callapi";
import { UserProfileLink } from "../../api/endpoints";

const ViewProfile = () => {
  const history = useHistory();

  const [editMode, setEditMode] = useState(false);

  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [img, setImg] = useState();

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
    setImg(info.file.originFileObj);
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

  useEffect(() => {
    init();
  }, []);

  const init = async e => {
    const response = await GetApi(UserProfileLink);

    if (response.status === 200) {
      let responseData = response.data.results;
    } else {
      message.error("Sorry couldn't load profile info right now");
    }
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const CancelEdit = () => {
    setEditMode(false);
  };

  const handleSaveEdit = () => {
    console.log("clicked save");
  };

  const handleChange = () => {
    console.log("reached handle change");
  };

  return (
    <MainPanel>
      <Row>
        <Col lg={9}>
          <Card style={{ margin: "80px" }}>
            <div className="back-button">
              <Button
                className="user-back-button"
                onClick={() => history.push("/main_panel/main")}
              >
                <img src={BackArrow} alt="back-arrow-left" /> Back
              </Button>
            </div>
            <div className="profile-info" style={{ marginTop: "20px" }}>
              <Row>
                <Col>
                  {editMode ? (
                    <Upload
                      type="file"
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
                  ) : (
                    <Avatar
                      shape="cicle"
                      size={180}
                      icon={<UserOutlined />}
                      style={{ marginLeft: "5%" }}
                    />
                  )}
                </Col>
                <Col>
                  <div className="input-fields">
                    <p className="instruction" style={{ marginBottom: "0px" }}>
                      First Name
                    </p>
                    {editMode ? (
                      <Input
                        name="first_name"
                        className="Form-input"
                        type="text"
                        placeholder="Enter your first-name"
                        onChange={e => handleChange(e)}
                      />
                    ) : (
                      <p className="name">Janet</p>
                    )}

                    <p className="instruction" style={{ marginBottom: "0px" }}>
                      Middle Name
                    </p>
                    {editMode ? (
                      <Input
                        name="last_name"
                        className="Form-input"
                        type="text"
                        placeholder="Enter your middle-name"
                        onChange={e => handleChange(e)}
                      />
                    ) : (
                      <p className="name">Joe</p>
                    )}

                    <p className="instruction" style={{ marginBottom: "0px" }}>
                      Last Name
                    </p>
                    {editMode ? (
                      <Input
                        name="last_name"
                        className="Form-input"
                        type="text"
                        placeholder="Enter your last-name"
                        onChange={e => handleChange(e)}
                      />
                    ) : (
                      <p className="name">Smith</p>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
            <div
              className="footer-button"
              style={{ width: "100%", float: "right" }}
            >
              {editMode ? (
                <>
                  <Button
                    className="program-continue"
                    onClick={handleSaveEdit}
                    style={{ float: "left" }}
                  >
                    Save Changes
                  </Button>
                  <Button
                    className="program-continue"
                    onClick={CancelEdit}
                    style={{ marginLeft: "20px" }}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button
                  className="program-continue"
                  onClick={handleEdit}
                  style={{ float: "left" }}
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </MainPanel>
  );
};
export default ViewProfile;
