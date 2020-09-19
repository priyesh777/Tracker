import React, { useState } from "react";
import BackArrow from "../../images/arrow-left.svg";
import MainPanel from "./MainPanel";
import { Row, Col } from "react-bootstrap";
import { Button, Card, Avatar, Input } from "antd";
import { useHistory } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

const ViewProfile = () => {
  const history = useHistory();

  const [editMode, setEditMode] = useState(false);
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
                  <Avatar
                    shape="cicle"
                    size={180}
                    icon={<UserOutlined />}
                    style={{ marginLeft: "5%" }}
                  />
                </Col>
                <Col>
                  <div className="input-fields">
                    <p className="instruction">First Name</p>
                    <p className="name">Janet</p>
                    <br />
                    <p className="instruction">Last Name</p>
                    <p className="name">Joe</p>
                  </div>
                </Col>
              </Row>
            </div>
            <div
              className="footer-button"
              style={{ width: "100%", float: "right" }}
            >
              <Button className="program-continue" style={{ float: "left" }}>
                Edit Profile
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </MainPanel>
  );
};
export default ViewProfile;
