import React from "react";
import { Col, Row, Button, Input } from "antd";
import BackArrow from "../images/arrow-left.svg";
import { Link, useHistory } from "react-router-dom";

const SignUp1 = () => {
  const history = useHistory();

  return (
    <div
      className="container"
      style={{
        background: "#f6eeee",
        border: "2px solid #F3F3F3",
        boxSizing: "border-box",
        borderRadius: "8px",
        width: "1000px",
        marginTop: "90px",
        marginLeft: "200px"
      }}
    >
      <Row style={{ height: "500px" }}>
        <Col span={8} style={{ background: "#AD77C0" }}>
          <p
            style={{
              fontSize: "20px",
              color: "#FFFFFF",
              marginTop: "26px",
              marginLeft: "30px",
              fontFamily: "Fugaz One"
            }}
          >
            BugNas
          </p>
          <div className="text-container">
            <p
              style={{
                color: "#FFFFFF",
                fontFamily: "Karla",
                fontWeight: "bold",
                fontSize: "18px",
                marginTop: "70px",
                marginLeft: "50px"
              }}
            >
              70% of companies say they <br />
              have benefitted from us
            </p>
            <p
              style={{
                color: "#FFFFFF",
                fontFamily: "Karla",
                fontWeight: "normal",
                fontSize: "14px",
                marginTop: "-11px",
                marginLeft: "50px"
              }}
            >
              You’ll have a wide array of programs to <br />
              choose from
            </p>
          </div>
        </Col>
        <Col span={16}>
          <div className="signUp-form-wrapper" style={{ padding: "34px" }}>
            <div
              className="contact-support-button-sectiom"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Button
                style={{
                  fontSize: "15px",
                  fontFamily: "Karla",
                  color: "#1C0025",
                  border: "2px solid #F3F3F3",
                  borderRadius: "5px"
                }}
              >
                <img src={BackArrow} alt="back-arrow-left" /> Back
              </Button>
              <p>
                Need Help?
                <Link to="##" style={{ color: "#AD77C0" }}>
                  Contact Support
                </Link>
              </p>
            </div>
            <div className="account-details" style={{ marginTop: "16px" }}>
              <div
                className="Set-up-account"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <p
                  style={{
                    color: "#000000",
                    fontFamily: "Karla",
                    fontSize: "20px",
                    fontWeight: "bold"
                  }}
                >
                  Set up your account
                </p>

                <p
                  style={{
                    color: "#000000",
                    fontSize: "20px",
                    fontWeight: "bold"
                  }}
                >
                  <a href="###" style={{ color: "#AD77C0" }}>
                    1
                  </a>
                  /4
                </p>
              </div>
              <p
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontFamily: "Karla",
                  fontWeight: "bold"
                }}
              >
                Please enter the following details to continue
              </p>
              <div className="input-form">
                <Input
                  type="name"
                  placeholder="UserName"
                  style={{
                    width: "50%",
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
                    width: "50%",
                    background: "#F3F3F3",
                    border: "2px solid #C4C4C4",
                    borderRadius: "5px",
                    marginBottom: "20px"
                  }}
                />
                <br />
                <Input
                  type="password"
                  placeholder="Password"
                  style={{
                    width: "50%",
                    background: "#F3F3F3",
                    border: "2px solid #C4C4C4",
                    borderRadius: "5px",
                    marginBottom: "21px"
                  }}
                />
                <p
                  style={{
                    marginBottom: "20px",
                    color: "rgba(0, 0, 0, 0.6)",
                    fontWeight: "bold"
                  }}
                >
                  By signing up, you agree to{" "}
                  <a
                    href="###"
                    style={{ color: "#AD77C0", fontWeight: "bold" }}
                  >
                    terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="###"
                    style={{ color: "#AD77C0", fontWeight: "bold" }}
                  >
                    policies
                  </a>
                </p>
                <Button
                  className="sign-up-button"
                  style={{
                    width: "50%",
                    background: "#AD77C0",
                    border: "2px solid #AD77C0",
                    borderRadius: "5px"
                  }}
                  onClick={() => history.push("/register_step2")}
                >
                  <p
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "Karla",
                      fontWeight: "bold"
                    }}
                  >
                    Sign Up
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default SignUp1;
