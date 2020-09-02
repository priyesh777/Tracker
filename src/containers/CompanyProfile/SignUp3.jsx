import React, { useState } from "react";
import { Button } from "antd";
import BackArrow from "../../images/arrow-left.svg";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import InviteEmail from "./InviteEmail";
import { AuthPostApi } from "../../api/callapi";
import { InvitationLink } from "../../api/endpoints";
import { toast } from "react-toastify";

const SignUp3 = () => {
  const history = useHistory();

  const [inputList, setInputList] = useState([{ email: "", role: "" }]);

  const handleAddEmail = () => {
    setInputList([...inputList, { email: "", role: "" }]);
  };

  const onInputChange = list => {
    console.log("Data from Invite-Email  :::", list);
    setInputList(list);
  };

  const handleInvite = async e => {
    e.preventDefault();
    console.log("Input values:::", inputList);

    // var input_values = new FormData();

    // for (var key in inputList) {
    //   input_values.append(key, inputList[key]);
    // }

    var response = await AuthPostApi(InvitationLink, inputList);
    console.log("latest response::", response);
    if (response.status === 201) {
      history.push("/register_step4");
      toast.success("Invitation has been sent");
    } else {
      console.log("error in process::");
    }
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
                  onInputChange={onInputChange}
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
            <Button className="Purple-button" onClick={handleInvite}>
              Invite
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default SignUp3;
