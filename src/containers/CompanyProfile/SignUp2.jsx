import React from "react";
import { Button, Input } from "antd";
import { Container, Row } from "react-bootstrap";
import BackArrow from "../../images/arrow-left.svg";
import PhotoUpload from "../../images/pic_upload.png";
import { Link, useHistory } from "react-router-dom";

const SignUp2 = () => {
  const history = useHistory();

  const handleUpload = () => {
    console.log("clicked photo upload");
  };

  return (
    <Container>
      <div className="Form-2-div">
        <div className="support-button-section">
          <Button
            className="cps-form-backButton"
            onClick={() => {
              history.push("/");
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
          <p className="instruction">Hi there ! Welcome to BugNas</p>

          <p className="instruction">
            <Link to="###" className="link-words">
              2
            </Link>
            /4
          </p>
        </div>

        <p className="instruction-1">
          Please setup your company profile to continue
        </p>

        <Row style={{ width: "100%", marginTop: "15px" }}>
          <div className="form-content">
            <div className="input-fields" style={{ width: "70%" }}>
              <Input
                className="input-box"
                type="name"
                placeholder="Company Name"
              />
              <br />
              <Input
                className="input-box"
                type="email"
                placeholder="Company Type"
              />
              <br />
              <Input
                className="input-box"
                type="email"
                placeholder="Company Website"
              />
              <br />
              <Input
                className="input-box"
                type="email"
                placeholder="Company Phone Number"
              />
              <br />
              <Input
                className="input-box"
                type="email"
                placeholder="Your full Name"
              />
              <br />
              <Input
                className="input-box"
                type="email"
                placeholder="Your Email Address"
              />
              <br />
              <Input
                className="input-box"
                type="password"
                placeholder="Company Website"
              />

              <p className="instruction-2">
                By signing up, you agree to{" "}
                <Link to="###" className="link-words">
                  terms
                </Link>{" "}
                and{" "}
                <Link to="###" className="link-words">
                  policies
                </Link>
              </p>
              <Button
                className="sign-up-button"
                onClick={() => history.push("/register_step3")}
              >
                Sign Up
              </Button>
            </div>
            <div className="upload-div" style={{ marginLeft: "108px" }}>
              <a href="##" onClick={handleUpload}>
                <img src={PhotoUpload} alt="profile-pic" />
              </a>
            </div>
          </div>
        </Row>
      </div>
    </Container>
  );
};
export default SignUp2;
