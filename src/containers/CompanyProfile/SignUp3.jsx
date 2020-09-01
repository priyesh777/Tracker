import React, { useState } from "react";
import { Button } from "antd";
import BackArrow from "../../images/arrow-left.svg";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import InviteEmail from "./InviteEmail";

const SignUp3 = () => {
  const history = useHistory();

  const [inputList, setInputList] = useState([{ email: "", role: "" }]);

  const handleAddEmail = () => {
    setInputList([...inputList, { email: "", role: "" }]);
  };

  const onChangeEmail = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  return (
    <Row>
      <Col>
        <div className="invite-friends">
          <div className="support-button-section">
            <Button
              className="cps-form-backButton"
              onClick={() => {
                history.push("/register_step2");
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
            <p className="great-job">Great Job !</p>
            <p className="great-job">
              <a href="###" style={{ color: "#AD77C0" }}>
                3
              </a>
              /4
            </p>
          </div>
          <p className="instruction">Please invite your friends</p>

          <div className="invite-emails">
            <Row>
              <div className="input-area" style={{ width: "100%" }}>
                <InviteEmail
                  inputList={inputList}
                  onChangeEmail={onChangeEmail}
                />
              </div>
              <div className="add-button" style={{ marginLeft: "8%" }}>
                <Button
                  className="white-button"
                  type="submit"
                  onClick={handleAddEmail}
                >
                  + Add new field
                </Button>
              </div>
            </Row>
          </div>

          <div className="footer-button">
            <Button className="white-button">Do this Later</Button>
            <Button
              className="Purple-button"
              onClick={() => history.push("/register_step4")}
            >
              Invite
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default SignUp3;
