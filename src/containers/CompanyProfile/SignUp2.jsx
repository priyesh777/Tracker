import React, { useState } from "react";
import { Button, Input, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Container, Row, Form } from "react-bootstrap";
import BackArrow from "../../images/arrow-left.svg";
// import PhotoUpload from "../../images/pic_upload.png";
import { Link, useHistory } from "react-router-dom";
import { AuthPostApi } from "../../api/callapi";
import { CompanyProfileLink } from "../../api/endpoints";
import { toast } from "react-toastify";

const SignUp2 = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [imageUrl] = useState("");

  const [companyData, setCompanyData] = useState({
    company_name: "",
    company_type: "",
    logo: {},
    phone: "",
    website: "",
    representative_name: ""
  });

  //--- For upload-image

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
    console.log("Uploaded info ::", info);
    const tempState = info.file;

    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      setLoading(false);
      message.success("file uploaded");
    } else if (info.file.status === "error") {
      setLoading(false);
      message.error("file upload failed");
    }

    setCompanyData({ logo: tempState });
  };
  //-------

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
      toast.success("Profile Setup Completed");
    } else {
      console.log("error in process::");
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
              <Upload
                name="logo"
                listType="picture-card"
                customRequest={dummyRequest}
                className="avatar-uploader"
                showUploadList={true}
                beforeUpload={beforeUpload}
                onChange={handleUpload}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};
export default SignUp2;

/* 
const {  Upload, message  } = antd;
const {  LoadingOutlined, PlusOutlined  } = icons;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

class Avatar extends React.Component {
  state = {
    loading: false,
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const { loading, imageUrl } = this.state;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    );
  }
}

ReactDOM.render(<Avatar />, mountNode);

*/
