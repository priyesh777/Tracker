import React from "react";
import { useHistory } from "react-router-dom";
import Terms from "./Terms";
import SetScope from "./SetScope";
import BackArrow from "../images/arrow-left.svg";
import { Button } from "antd";
import { Tab, Tabs, Col, Row } from "react-bootstrap";
import Rewards from "./Rewards";
import Review from "./Review";
import NameDetails from "./NameDetails";

const Program = () => {
  const history = useHistory();

  return (
    <div className="flex-container">
      <div className="program-container">
        <Col>
          <Row>
            <div className="support-button-section">
              <Button
                className="cps-form-backButton"
                onClick={() => {
                  history.push("/register_step4");
                }}
              >
                <img src={BackArrow} alt="back-arrow-left" /> Back
              </Button>
            </div>
          </Row>

          <Row>
            <div className="tabs-list">
              <Tabs defaultActiveKey="active-tab" id="uncontrolled-tab-example">
                <Tab eventKey="active-tab" title="Name & Details">
                  <NameDetails />
                </Tab>
                <Tab eventKey="set-scope" title="Set Scope">
                  <SetScope />
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
          </Row>

          <Row>
            <div className="footer-button">
              <Button
                className="program-continue"
                onClick={() => history.push("###")}
              >
                Continue
              </Button>
            </div>
          </Row>
        </Col>
      </div>
    </div>
  );
};
export default Program;
