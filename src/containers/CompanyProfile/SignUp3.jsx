import React from "react";
import { Button, Input, Select } from "antd";
import BackArrow from "../../images/arrow-left.svg";
import { Link, useHistory } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { Container, Row } from "react-bootstrap";

const SignUp3 = () => {
  const history = useHistory();
  const { Option } = Select;

  const handleSelectAuthority = () => {
    console.log("selected an authority");
  };

  return (
    <Container>
      <Row>
        <div className="invite-friends">
          <div className="support-button-section">
            <Button
              className="cps-form-backButton"
              onClick={() => {
                history.push("/register_step2");
              }}
            >
              <img src={BackArrow} alt="back-arrow-left" /> Back
            </Button>
            <p>
              Need Help?{" "}
              <Link to="##" className="link-words">
                Contact Support
              </Link>
            </p>
          </div>
          <div className="set-up-account">
            <p className="great-job">Great Job !</p>
            <p className="great-job">
              <a href="###" style={{ color: "#AD77C0" }}>
                3
              </a>
              /4
            </p>
          </div>
          <p className="instruction">Please invite your friends</p>

          <div className="invite-emails">
            <Row>
              <div className="input-fields">
                <Input
                  className="input-box"
                  type="name"
                  placeholder="Email Address"
                />

                <Select
                  className="select-authority"
                  defaultValue="Admin"
                  onChange={handleSelectAuthority}
                  suffixIcon={<CaretDownOutlined />}
                >
                  <Option value="admin" className="option">
                    Admin
                  </Option>
                  <Option value="moderator" className="option">
                    Moderator
                  </Option>
                </Select>

                <Input
                  className="input-box"
                  type="name"
                  placeholder="Email Address"
                />

                <Select
                  className="select-authority"
                  defaultValue="Admin"
                  onChange={handleSelectAuthority}
                  suffixIcon={<CaretDownOutlined />}
                >
                  <Option value="admin">Admin</Option>
                  <Option value="moderator">Moderator</Option>
                </Select>

                <Button className="white-button" type="submit">
                  + Add new field
                </Button>
              </div>
            </Row>
          </div>

          <div className="footer-button">
            <Button className="white-button">Do this Later</Button>
            <Button
              className="Purple-button"
              onClick={() => history.push("/register_step4")}
            >
              Invite
            </Button>
          </div>
        </div>
      </Row>
    </Container>
  );
};
export default SignUp3;
