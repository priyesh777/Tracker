import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Terms from "./Terms";
import SetScope from "./SetScope";
import BackArrow from "../../images/arrow-left.svg";
import { Button } from "antd";
import { Tab, Tabs, Row } from "react-bootstrap";
import Rewards from "./Rewards";
import Review from "./Review";
import NameDetails from "./NameDetails";

const Program = () => {
  const history = useHistory();

  const [launchData, setLaunchData] = useState({
    name: "",
    logo: "",
    tag_line: "",
    created_at: "",
    description: "",
    program_target: [],
    program_reward: []
  });

  const onInputChange = () => {
    setLaunchData();
  };

  return (
    <Row>
      <div className="program-container">
        <div className="support-button-section" style={{ width: "100%" }}>
          <Button
            className="cps-form-backButton"
            onClick={() => {
              history.push("/register_step4");
            }}
          >
            <img src={BackArrow} alt="back-arrow-left" /> Back
          </Button>
        </div>
        <div className="tabs-list">
          <Tabs defaultActiveKey="active-tab" id="uncontrolled-tab-example">
            <Tab eventKey="active-tab" title="Name & Details">
              <NameDetails launchData={launchData} />
            </Tab>
            <Tab eventKey="set-scope" title="Set Scope">
              <SetScope launchData={launchData} />
            </Tab>
            <Tab eventKey="terms" title="Terms and Conditions">
              <Terms />
            </Tab>
            <Tab eventKey="rewards" title="Rewards">
              <Rewards />
            </Tab>
            <Tab eventKey="review" title="Review & Submit">
              <Review />
            </Tab>
          </Tabs>
        </div>
        <div className="footer-button" style={{ width: "100%" }}>
          <Button
            className="program-continue"
            onClick={() => history.push("###")}
          >
            Continue
          </Button>
        </div>
      </div>
    </Row>
  );
};
export default Program;
