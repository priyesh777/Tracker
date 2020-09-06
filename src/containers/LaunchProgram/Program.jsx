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

  //------State for Name & Details - section
  const [nameData, setNameData] = useState({
    program_name: "",
    tagline: "",
    description: ""
  });
  const [programLogo, setProgramLogo] = useState();

  const handleNameDetails = info => {
    setNameData(info);
    console.log("Name details ::", nameData);
  };

  const handleImage = info => {
    setProgramLogo(info);
  };
  //------------------------------------------//

  //--------State for Set Scope -section------//
  const [scopeData, setScopeData] = useState([
    { name: "", type: "", scope: "" }
  ]);

  const handleScope = info => {
    setScopeData(info);
    console.log("Scope data ::", info);
  };

  //----------------------------------------//

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
          <Tabs defaultActiveKey="1" id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Name & Details">
              <NameDetails
                nameData={nameData}
                handleNameDetails={handleNameDetails}
                handleImage={handleImage}
              />
            </Tab>
            <Tab eventKey={2} title="Set Scope">
              <SetScope scopeData={scopeData} handleScope={handleScope} />
            </Tab>
            <Tab eventKey={3} title="Terms and Conditions">
              <Terms />
            </Tab>
            <Tab eventKey={4} title="Rewards">
              <Rewards />
            </Tab>
            <Tab eventKey={5} title="Review & Submit">
              <Review programLogo={programLogo} />
            </Tab>
          </Tabs>
          <div
            className="footer-button"
            style={{ width: "100%", float: "right" }}
          >
            <Button
              className="program-continue"
              style={{ float: "right" }}
              onClick={() => history.push("###")}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </Row>
  );
};
export default Program;
