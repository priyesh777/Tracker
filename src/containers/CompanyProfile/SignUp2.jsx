import React, { useState } from "react";
import { Button, Input } from "antd";
import { Container, Row, Form } from "react-bootstrap";
import BackArrow from "../../images/arrow-left.svg";
import PhotoUpload from "../../images/pic_upload.png";
import { Link, useHistory } from "react-router-dom";
import { AuthPostApi } from "../../api/callapi";
import { CompanyProfileLink } from "../../api/endpoints";

const SignUp2 = () => {
  const history = useHistory();

  const [companyData, setCompanyData] = useState({
    company_name: "",
    company_type: "",
    phone: "",
    website: "",
    representative_name: ""
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setCompanyData({ ...companyData, [name]: value });
    console.log("Input handled::", companyData);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("form values:::", companyData);

    var form_values = new FormData();

    for (var key in companyData) {
      form_values.append(key, companyData[key]);
    }

    var response = await AuthPostApi(CompanyProfileLink, form_values);
    console.log("latest response::", response);
    if (response.status === 201) {
      history.push("/register_step3");
      alert("done the job");
    } else {
      console.log("error in process::");
    }
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
                  name="website"
                  className="input-box"
                  type="text"
                  placeholder="Company Website"
                  onChange={handleInput}
                />
                <br />
                <Input
                  name="phone"
                  className="input-box"
                  type="number"
                  placeholder="Company Phone Number"
                  onChange={handleInput}
                />
                <br />
                <Input
                  name="representative_name"
                  className="input-box"
                  type="text"
                  placeholder="Your full Name"
                  onChange={handleInput}
                />
                <br />

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
                  onClick={handleSubmit}
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
