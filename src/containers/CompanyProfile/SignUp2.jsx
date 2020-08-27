import React, { useState } from "react";
import { Button, Input } from "antd";
import { Container, Row, Form } from "react-bootstrap";
import BackArrow from "../../images/arrow-left.svg";
import PhotoUpload from "../../images/pic_upload.png";
import { Link, useHistory } from "react-router-dom";

const SignUp2 = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    company_name: "",
    company_type: "",
    company_phone: "",
    company_website: "",
    user_name: "",
    email: "",
    password: ""
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log("Input handled::", formData);
  };

  const handleSubmit = values => {
    console.log("form:::", values);
  };

  const handleUpload = () => {
    console.log("clicked photo upload");
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
              <Form onSubmit={handleSubmit}>
                <Input
                  name="company_name"
                  className="input-box"
                  type="text"
                  placeholder="Company Name"
                  onChange={handleInput}
                />
                <br />
                <Input
                  name="company_type"
                  className="input-box"
                  type="text"
                  placeholder="Company Type"
                  onChange={handleInput}
                />
                <br />
                <Input
                  name="company_website"
                  className="input-box"
                  type="text"
                  placeholder="Company Website"
                  onChange={handleInput}
                />
                <br />
                <Input
                  name="company_phone"
                  className="input-box"
                  type="number"
                  placeholder="Company Phone Number"
                  onChange={handleInput}
                />
                <br />
                <Input
                  name="user_name"
                  className="input-box"
                  type="text"
                  placeholder="Your full Name"
                  onChange={handleInput}
                />
                <br />
                <Input
                  name="email"
                  className="input-box"
                  type="email"
                  placeholder="Your Email Address"
                  onChange={handleInput}
                />
                <br />
                <Input
                  name="password"
                  className="input-box"
                  type="password"
                  placeholder="Password"
                  onChange={handleInput}
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
