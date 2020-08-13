import React from "react";
import { Button, Input, Row, Col, Select } from "antd";
import BackArrow from "../images/arrow-left.svg";
import { Link, useHistory } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";

const SignUp3 = () => {
  const history = useHistory();
  const { Option } = Select;

  const handleSelectAuthority = () => {
    console.log("selected an authority");
  };

  return (
    <div
      className="signUp-3-container"
      style={{
        background: "#f6eeee",
        border: "2px solid #F3F3F3",
        boxSizing: "border-box",
        borderRadius: "8px",
        width: "600px",
        height: "500px",
        marginTop: "85px",
        marginLeft: "360px"
      }}
    >
      <div
        className="contact-support-button-sectiom"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "30px"
        }}
      >
        <Button
          style={{
            fontSize: "15px",
            fontFamily: "Karla",
            color: "#1C0025",
            border: "2px solid #F3F3F3",
            borderRadius: "5px"
          }}
          onClick={() => {
            history.push("/register_step2");
          }}
        >
          <img src={BackArrow} alt="back-arrow-left" /> Back
        </Button>
        <p>
          Need Help?{" "}
          <Link to="##" style={{ color: "#AD77C0" }}>
            Contact Support
          </Link>
        </p>
      </div>
      <div
        className="Set-up-account"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "34px",
          marginRight: "34px",
          height: "34px"
        }}
      >
        <p
          style={{
            color: "#000000",
            fontFamily: "Karla",
            fontSize: "20px",
            fontWeight: "bold"
          }}
        >
          Great Job !
        </p>

        <p
          style={{
            color: "#000000",
            fontSize: "20px",
            fontWeight: "bold"
          }}
        >
          <a href="###" style={{ color: "#AD77C0" }}>
            3
          </a>
          /4
        </p>
      </div>
      <p
        style={{
          color: "rgba(0, 0, 0, 0.6)",
          fontFamily: "Karla",
          fontWeight: "bold",
          marginLeft: "34px"
        }}
      >
        Please invite your friends
      </p>
      <div className="invite-emails">
        <Row>
          <Col span={12}>
            <div className="input-fields" style={{ marginLeft: "34px" }}>
              <Input
                type="name"
                placeholder="Email Address"
                style={{
                  width: "93%",
                  background: "#F3F3F3",
                  border: "2px solid #C4C4C4",
                  borderRadius: "5px",
                  marginBottom: "20px"
                }}
              />
              <br />
              <Input
                type="email"
                placeholder="Email Address"
                style={{
                  width: "93%",
                  background: "#F3F3F3",
                  border: "2px solid #C4C4C4",
                  borderRadius: "5px",
                  marginBottom: "20px"
                }}
              />
              <br />
              <Input
                type="email"
                placeholder="Email Address"
                style={{
                  width: "93%",
                  background: "#F3F3F3",
                  border: "2px solid #C4C4C4",
                  borderRadius: "5px",
                  marginBottom: "20px"
                }}
              />
              <br />
              <Button
                type="text"
                style={{
                  color: "#AD77C0",
                  fontFamily: "Karla",
                  fontWeight: "bold"
                }}
              >
                + Add new field
              </Button>
            </div>
          </Col>

          <Col span={12}>
            <div className="authority" style={{ marginLeft: "85px" }}>
              <Select
                defaultValue="Admin"
                style={{
                  width: "181px",
                  background: "#FFFFFF",
                  border: "2px solid #E6E6E6",
                  boxSizing: "border-box",
                  borderRadius: "5px",
                  fontFamily: "Karla",
                  fontWeight: "bold",
                  marginTop: "-2px"
                }}
                onChange={handleSelectAuthority}
                suffixIcon={<CaretDownOutlined />}
              >
                <Option
                  value="admin"
                  style={{
                    color: "#000000",
                    fontFamily: "Karla",
                    fontWeight: "bold"
                  }}
                >
                  Admin
                </Option>
                <Option
                  value="moderator"
                  style={{
                    color: "#000000",
                    fontFamily: "Karla",
                    fontWeight: "bold"
                  }}
                >
                  Moderator
                </Option>
              </Select>

              <Select
                defaultValue="Admin"
                style={{
                  width: "181px",
                  background: "#FFFFFF",
                  border: "2px solid #E6E6E6",
                  boxSizing: "border-box",
                  borderRadius: "5px",
                  fontFamily: "Karla",
                  fontWeight: "bold",
                  marginTop: "18px"
                }}
                onChange={handleSelectAuthority}
                suffixIcon={<CaretDownOutlined />}
              >
                <Option
                  value="admin"
                  style={{
                    color: "#000000",
                    fontFamily: "Karla",
                    fontWeight: "bold"
                  }}
                >
                  Admin
                </Option>
                <Option
                  value="moderator"
                  style={{
                    color: "#000000",
                    fontFamily: "Karla",
                    fontWeight: "bold"
                  }}
                >
                  Moderator
                </Option>
              </Select>
            </div>
          </Col>
        </Row>
      </div>
      <div
        className="footer-invite-button"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "66px"
        }}
      >
        <Button
          style={{
            marginRight: "24%",
            width: "170px",
            border: "2px solid #AD77C0",
            borderRadius: "5px",
            background: "#FFFFFF",
            color: "#AD77C0",
            fontWeight: "bold"
          }}
        >
          Do this Later
        </Button>
        <Button
          style={{
            width: "170px",
            border: "2px solid #AD77C0",
            borderRadius: "5px",
            background: "#AD77C0",
            color: "#FFFFFF"
          }}
          onClick={() => history.push("/register_step4")}
        >
          Invite
        </Button>
      </div>
    </div>
  );
};
export default SignUp3;
