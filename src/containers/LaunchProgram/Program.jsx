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

  const [tabKey, setTabKey] = useState(1);

  const handleTab = num => {
    setTabKey(num);
    console.log("tab key ::", num);
  };

  const handleTabSelect = () => {};

  const [nameData, setNameData] = useState({
    program_name: "",
    tagline: "",
    description: "",
    logo: {}
  });

  const [scopeData, setScopeData] = useState();

  const handleScope = info => {
    setScopeData(info);
  };

  const handleNameDetails = info => {
    setNameData(info);
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
          <Tabs
            activeKey={tabKey}
            onSelect={handleTabSelect}
            id="controlled-tab-example"
          >
            <Tab eventKey={1} title="Name & Details">
              <NameDetails
                nameData={nameData}
                handleNameDetails={handleNameDetails}
                handleTab={handleTab}
              />
              <Button>back</Button>
            </Tab>
            <Tab eventKey={2} title="Set Scope">
              <SetScope
                scopeData={scopeData}
                handleScope={handleScope}
                handleTab={handleTab}
              />
            </Tab>
            <Tab eventKey={3} title="Terms and Conditions">
              <Terms handleTab={handleTab} />
            </Tab>
            <Tab eventKey={4} title="Rewards">
              <Rewards />
            </Tab>
            <Tab eventKey={5} title="Review & Submit">
              <Review />
            </Tab>
          </Tabs>
        </div>
        {/* <div className="footer-button" style={{ width: "100%" }}>
          <Button
            className="program-continue"
            onClick={() => history.push("###")}
          >
            Continue
          </Button>
        </div> */}
      </div>
    </Row>
  );
};
export default Program;
