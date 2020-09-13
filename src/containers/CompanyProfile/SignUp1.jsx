import React, { useState } from "react";
import { Button } from "antd";
import BackArrow from "../../images/arrow-left.svg";
import { Link, useHistory } from "react-router-dom";
import { Row, Form } from "react-bootstrap";
import { PostApi } from "../../api/callapi";
import { CompanySignUpLink } from "../../api/endpoints";
import { toast } from "react-toastify";

const SignUp1 = () => {
  const history = useHistory();
  const [validate, setValidate] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    type: "Admin"
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setValidate(true);
    if (
      formData.username !== "" &&
      formData.email !== "" &&
      formData.password !== ""
    ) {
      var response = await PostApi(CompanySignUpLink, formData);
      var data = response.data;
      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("data", data);
        history.push("/register_step2");
        toast.success("Signed Up successfully.");
      } else {
        console.log("error in process::");
      }
    }
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
              <Button
                className="cps-form-backButton"
                onClick={() => history.push("/")}
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
                <Form
                  noValidate
                  validated={validate}
                  onSubmit={handleSubmit}
                  style={{ marginTop: "1%" }}
                >
                  <Form.Control
                    name="username"
                    type="text"
                    className="Form-input"
                    onChange={handleChange}
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>

                  <Form.Control
                    name="email"
                    type="text"
                    className="Form-input"
                    onChange={handleChange}
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your email
                  </Form.Control.Feedback>

                  <Form.Control
                    name="password"
                    type="password"
                    className="Form-input"
                    onChange={handleChange}
                    placeholder="Password"
                    aria-describedby="inputGroupPrepend"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    And enter a strong password
                  </Form.Control.Feedback>

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
                    onClick={handleSubmit}
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
