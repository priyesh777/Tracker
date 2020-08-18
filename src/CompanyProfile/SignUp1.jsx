import React from "react";
import { Input, Button } from "antd";
import BackArrow from "../images/arrow-left.svg";
import { Link, useHistory } from "react-router-dom";
import { Row } from "react-bootstrap";

const SignUp1 = () => {
  const history = useHistory();

  return (
    <div className="container" id="Sign-up-1">
      <Row className="row-one">
        <div className="Form-1-div">
          <div
            className="left-col"
            style={{
              background: "#AD77C0",
              height: "490px",
              width: "340px",
              border: " 2px solid #AD77C0",
              borderRadius: "5px"
            }}
          >
            <div>
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
            </div>

            <div className="text-container">
              <p
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Karla",
                  fontSize: "18px",
                  marginTop: "70px",
                  fontWeight: "bold",
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
                  fontSize: "14px",
                  marginTop: "28px",
                  marginLeft: "50px"
                }}
              >
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
                <Input
                  type="name"
                  placeholder="UserName"
                  className="Form-input"
                />
                <br />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="Form-input"
                />
                <br />
                <Input
                  type="password"
                  placeholder="Password"
                  className="Form-input"
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
                  className="sign-up-button"
                  onClick={() => history.push("/register_step2")}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};
export default SignUp1;
