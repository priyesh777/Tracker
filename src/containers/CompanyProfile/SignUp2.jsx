import React from "react";
import { Button, Input, Form } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import BackArrow from "../../images/arrow-left.svg";
import PhotoUpload from "../../images/pic_upload.png";
import { Link, useHistory } from "react-router-dom";

const SignUp2 = () => {
  const history = useHistory();

  const handleUpload = () => {
    console.log("clicked photo upload");
  };

  const handleForm = () => {
    console.log("handling form section");
  };

  return (
    <Container>
      <Row>
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

          <div className="form-content">
            <div className="input-fields">
              <Form onFinish={handleForm}>
                <Input
                  name="company_name"
                  className="input-box"
                  type="name"
                  placeholder="Company Name"
                />
                <br />
                <Input
                  name="company_type"
                  className="input-box"
                  type="text"
                  placeholder="Company Type"
                />
                <br />
                <Input
                  name="company_name"
                  className="input-box"
                  type="text"
                  placeholder="Company Website"
                />
                <br />
                <Input
                  name="company_phone"
                  className="input-box"
                  type="number"
                  placeholder="Company Phone Number"
                />
                <br />
                <Input
                  name="user_name"
                  className="input-box"
                  type="text"
                  placeholder="Your full Name"
                />
                <br />
                <Input
                  name="company_name"
                  className="input-box"
                  type="email"
                  placeholder="Your Email Address"
                />
                <br />
                <Input
                  name="password"
                  className="input-box"
                  type="password"
                  placeholder="Password"
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
                  type="submit"
                  className="sign-up-button"
                  onClick={() => history.push("/register_step3")}
                >
                  Sign Up
                </Button>
              </Form>
            </div>
            <div className="upload-div">
              <a href="##" onClick={handleUpload}>
                <img src={PhotoUpload} alt="profile-pic" />
              </a>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};
export default SignUp2;
