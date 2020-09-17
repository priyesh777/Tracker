import React, { useState } from "react";
import { Button } from "antd";
import BackArrow from "../../../images/arrow-left.svg";
import { Link, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import InviteEmail from "./InviteEmail";
import { AuthPostApi } from "../../../api/callapi";
import { InvitationLink } from "../../../api/endpoints";
import { toast } from "react-toastify";
import MainPanel from "../MainPanel";

const NewAdmin = () => {
  const history = useHistory();

  const [inputList, setInputList] = useState([{ email: "", type: "" }]);

  const handleAddEmail = () => {
    setInputList([...inputList, { email: "", type: "" }]);
  };

  const onInputChange = list => {
    setInputList(list);
  };

  const handleInvite = async e => {
    e.preventDefault();
    console.log("Input values:::", inputList);
    const data = {};
    data["users"] = inputList;

    var response = await AuthPostApi(InvitationLink, data);
    console.log("latest response::", response);
    if (response.status === 200) {
      history.push("/main_panel/users");
      toast.success("Invitation has been sent");
    } else {
      console.log("error in process::");
    }
  };

  return (
    <MainPanel>
      <Row>
        <Col>
          <div
            className="invite-friends"
            style={{ marginLeft: "20%", background: "#dcdcdc" }}
          >
            <div className="support-button-section">
              <Button
                className="cps-form-backButton"
                onClick={() => {
                  history.push("/main_panel/users");
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
              <Button
                className="white-button"
                onClick={() => history.push("/register_step4")}
              >
                Do this Later
              </Button>
              <Button className="Purple-button" onClick={handleInvite}>
                Invite
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </MainPanel>
  );
};
export default NewAdmin;
