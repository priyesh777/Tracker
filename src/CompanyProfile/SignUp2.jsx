import React from "react";
import { Button, Input, Row, Col } from "antd";
import BackArrow from "../images/arrow-left.svg";
import PhotoUpload from "../images/pic_upload.png";
import { Link, useHistory } from "react-router-dom";

const SignUp2 = () => {
  const history = useHistory();

  const handleUpload = () => {
    console.log("clicked photo upload");
  };

  return (
    <div
      className="signUp-2-container"
      style={{
        background: "#f6eeee",
        border: "2px solid #F3F3F3",
        boxSizing: "border-box",
        borderRadius: "8px",
        width: "800px",
        height: "635px",
        marginTop: "20px",
        marginLeft: "300px"
      }}
    >
      <div
        className="contact-support-button-sectiom"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "30px",
          marginTop: "-7px"
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
            history.push("/");
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
          marginTop: "-20px"
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
          Hi there ! Welcome to BugNas
        </p>

        <p
          style={{
            color: "#000000",
            fontSize: "20px",
            fontWeight: "bold"
          }}
        >
          <a href="###" style={{ color: "#AD77C0" }}>
            2
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
        Please setup your company profile to continue
      </p>

      <div
        className="form-content"
        style={{
          padding: "33px",
          marginTop: "-36px",
          display: "flex",
          justifyContent: "space-evenly"
        }}
      >
        <Row style={{ width: "100%" }}>
          <Col span={12}>
            <div className="input-fields" style={{ width: "100%" }}>
              <Input
                type="name"
                placeholder="Company Name"
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
                placeholder="Company Type"
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
                placeholder="Company Website"
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
                placeholder="Company Phone Number"
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
                placeholder="Your full Name"
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
                placeholder="Your Email Address"
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
                type="password"
                placeholder="Company Website"
                style={{
                  width: "93%",
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
                <a href="###" style={{ color: "#AD77C0", fontWeight: "bold" }}>
                  terms
                </a>{" "}
                and{" "}
                <a href="###" style={{ color: "#AD77C0", fontWeight: "bold" }}>
                  policies
                </a>
              </p>
              <Button
                className="sign-up-button"
                style={{
                  width: "93%",
                  background: "#AD77C0",
                  border: "2px solid #AD77C0",
                  borderRadius: "5px"
                }}
                onClick={() => history.push("/register_step3")}
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
          </Col>
          <Col span={12}>
            <div className="upload-div" style={{ marginLeft: "108px" }}>
              <a href="##" onClick={handleUpload}>
                <img src={PhotoUpload} alt="profile-pic" />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default SignUp2;
