import React from "react";
import { Button, Input, Row, Col } from "antd";
import BackArrow from "../images/arrow-left.svg";
import { Link, useHistory } from "react-router-dom";

const SignUp3 = () => {
  const history = useHistory();
  return (
    <div
      className="signUp-3-container"
      style={{
        background: "#f6eeee",
        border: "2px solid #F3F3F3",
        boxSizing: "border-box",
        borderRadius: "8px",
        width: "800px",
        height: "500px",
        marginTop: "90px",
        marginLeft: "300px"
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
            </div>
          </Col>

          <Col span={12}>
            <div className="authority"></div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default SignUp3;
