import React, { useState } from "react";
import { Input, Button } from "antd";
import BackArrow from "../../images/arrow-left.svg";
import { Link, useHistory } from "react-router-dom";
import { Row, Form } from "react-bootstrap";

const SignUp1 = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    password: ""
  });

  const handleInput = e => {
    const user_name = e.target.value;
    setFormData({ user_name });
    console.log("Input::", e.target.value);
  };

  const handleForm = values => {
    console.log("form:::", values);
  };

  return (
    <div className="container">
      <Row className="row-one">
        <div className="Form-1-div">
          <div className="left-col">
            <div>
              <p className="Bugnas-text">BugNas</p>
            </div>

            <div className="text-container">
              <p className="para-one">
                70% of companies say they <br />
                have benefitted from us
              </p>
              <p className="para-two">
                You’ll have a wide array of programs to <br />
                choose from
              </p>
            </div>
          </div>

          <div className="signUp-form-wrapper">
            <div className="support-button-section">
              <Button className="cps-form-backButton">
                <img src={BackArrow} alt="back-arrow-left" /> Back
              </Button>
              <p>
                Need Help?{" "}
                <Link to="##" className="link-words">
                  Contact Support
                </Link>
              </p>
            </div>
            <div className="account-details">
              <div
                className="Set-up-account"
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <p className="form-header">Set up your account</p>

                <p className="form-header">
                  <a className="link-words" href="###">
                    1
                  </a>
                  /4
                </p>
              </div>
              <p className="instruction">
                Please enter the following details to continue
              </p>
              <div className="input-form">
                <Form onFinish={handleForm}>
                  <Input
                    name="UserName"
                    type="text"
                    placeholder="UserName"
                    className="Form-input"
                    onChange={handleInput}
                  />
                  <br />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="Form-input"
                    onChange={handleInput}
                  />
                  <br />
                  <Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="Form-input"
                    onChange={handleInput}
                  />
                  <p className="instruction">
                    By signing up, you agree to{" "}
                    <a className="link-words" href="###">
                      terms
                    </a>{" "}
                    and{" "}
                    <a className="link-words" href="###">
                      policies
                    </a>
                  </p>
                  <Button
                    type="submit"
                    className="sign-up-button"
                    onClick={() => history.push("/register_step2")}
                  >
                    Sign Up
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};
export default SignUp1;
