import React, { useState } from "react";
import { Button, Input, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Container, Row, Form } from "react-bootstrap";
import BackArrow from "../../images/arrow-left.svg";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import { AuthPostApi } from "../../api/callapi";
import { CompanyProfileLink } from "../../api/endpoints";

const SignUp2 = () => {
  const history = useHistory();

  const [validate, setValidate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [img, setImg] = useState();

  const [companyData, setCompanyData] = useState({
    company_name: "",
    company_type: "",
    phone: "",
    website: "",
    representative_name: ""
  });

  //------------- For upload-image------//
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const beforeUpload = file => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleUpload = info => {
    setImg(info.file.originFileObj);
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "done") {
      setLoading(false);
      setUploaded(true);
      message.success("file uploaded");
    } else if (info.file.status === "error") {
      setLoading(false);
      message.error("file upload failed");
    }
  };
  //-----------------------------------------//

  const handleChange = e => {
    const { name, value } = e.target;
    setCompanyData({ ...companyData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setValidate(true);

    if (
      companyData.company_name !== "" &&
      companyData.company_type !== "" &&
      companyData.website !== "" &&
      companyData.phone !== "" &&
      companyData.representative_name !== ""
    ) {
      var form_values = new FormData();

      for (var key in companyData) {
        form_values.append(key, companyData[key]);
      }
      form_values.append("Appended logo", img);

      var response = await AuthPostApi(CompanyProfileLink, form_values);
      if (response.status === 201) {
        history.push("/register_step3");
        toast.success("Profile Setup Completed");
      } else {
        console.log("error in process::");
      }
    }
  };

  return (
    <Container>
      <Row>
        <div className="Form-2-div">
          <div className="support-button-section">
            <Button
              className="cps-form-backButton"
              onClick={() => {
                history.push("/register_step1");
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
              <Form noValidate validated={validate} onSubmit={handleSubmit}>
                <Form.Control
                  name="company_name"
                  type="text"
                  className="Form-input"
                  onChange={handleChange}
                  placeholder="Company Name"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Enter your company name !
                </Form.Control.Feedback>

                <Form.Control
                  name="company_type"
                  type="text"
                  className="Form-input"
                  onChange={handleChange}
                  placeholder="Company Type"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Your company type !
                </Form.Control.Feedback>

                <Form.Control
                  name="website"
                  type="text"
                  className="Form-input"
                  onChange={handleChange}
                  placeholder="Company Website"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Your Company's Website
                </Form.Control.Feedback>

                <Form.Control
                  name="phone"
                  type="number"
                  className="Form-input"
                  onChange={handleChange}
                  placeholder="Company Type"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Company's Phone Number !
                </Form.Control.Feedback>

                <Form.Control
                  name="representative_name"
                  type="text"
                  className="Form-input"
                  onChange={handleChange}
                  placeholder="Representative Name"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Company's representative Name !
                </Form.Control.Feedback>

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
              <Upload
                type="file"
                name="logo"
                listType="picture-card"
                customRequest={dummyRequest}
                className="avatar-uploader"
                showUploadList={true}
                beforeUpload={beforeUpload}
                onChange={handleUpload}
              >
                {uploaded ? null : uploadButton}
              </Upload>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};
export default SignUp2;
