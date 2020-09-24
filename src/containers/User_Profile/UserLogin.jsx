import React, { useState } from "react";
import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { Row, Form, Col } from "react-bootstrap";
import { PostApi } from "../../api/callapi";
import { UserLoginLink } from "../../api/endpoints";
import { toast } from "react-toastify";

const UserLogin = () => {
  const history = useHistory();
  const [validate, setValidate] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setValidate(true);

    if (formData.username !== "" && formData.password !== "") {
      var form_values = new FormData();

      for (var key in formData) {
        form_values.append(key, formData[key]);
      }

      var response = await PostApi(UserLoginLink, form_values);

      var userType = response.data;

      if (response.status === 200 && response.data.response !== "Error") {
        localStorage.setItem("token", userType.token);
        localStorage.setItem("user_type", userType.type);
        localStorage.setItem("user_id", userType.pk);
        history.push("/main_panel");
        toast.success("Logged in successfully");
      } else {
        toast.error(response.data.error_message);
      }
    }
  };

  return (
    <div className="container">
      <Row className="row-one">
        <div className="Form-1-div">
          <Col lg={5}>
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
          </Col>
          <Col lg={7}>
            <div className="signUp-form-wrapper">
              <div className="support-button-section">
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
                  <p className="form-header">
                    Please enter your Login Credentials
                  </p>
                </div>

                <div className="input-form">
                  <Form noValidate validated={validate} onSubmit={handleSubmit}>
                    <Form.Control
                      name="username"
                      type="email"
                      className="Form-input"
                      onChange={handleChange}
                      placeholder="Your Email"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email
                    </Form.Control.Feedback>
                    <br />
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
                      Enter a valid password
                    </Form.Control.Feedback>

                    <p className="instruction">
                      <a className="link-words" href="###">
                        Forgot Password?
                      </a>
                    </p>
                    <Button
                      type="submit"
                      className="sign-up-button"
                      onClick={handleSubmit}
                    >
                      Log in
                    </Button>
                  </Form>
                  <p className="instruction" style={{ marginTop: "2%" }}>
                    New to BugNas ?{" "}
                    <a
                      className="link-words"
                      href="##"
                      onClick={() => history.push("/register_step1")}
                    >
                      Create a new account
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </div>
  );
};
export default UserLogin;
