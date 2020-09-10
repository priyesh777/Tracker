import React, { useState } from "react";
import { Input, Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { Row, Form } from "react-bootstrap";
import { PostApi } from "../../api/callapi";
import { UserLoginLink } from "../../api/endpoints";
import { toast } from "react-toastify";

const UserLogin = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    console.log("form:::", formData);

    e.preventDefault();
    var form_values = new FormData();

    for (var key in formData) {
      form_values.append(key, formData[key]);
    }

    var response = await PostApi(UserLoginLink, form_values);
    // console.log(response)
    var data = response.data;
    if (response.status === 200) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("data", data);
      history.push("/main_panel");
      toast.success("Logged in successfully");
    } else {
      console.log("error in process::");
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
                <Form onSubmit={handleSubmit}>
                  <Input
                    name="username"
                    type="text"
                    placeholder="UserName"
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
                <p className="instruction">
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
        </div>
      </Row>
    </div>
  );
};
export default UserLogin;
