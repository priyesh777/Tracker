import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Terms from "./Terms";
import SetScope from "./SetScope";
import BackArrow from "../images/arrow-left.svg";
import { Button } from "antd";
import { Container, Tab, Tabs } from "react-bootstrap";
import Rewards from "./Rewards";
import Review from "./Review";

const Details = () => {
  const history = useHistory();

  return (
    <Container>
      <div className="program-container">
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

        <div className="tabs-list">
          <Tabs defaultActiveKey="active-tab" id="uncontrolled-tab-example">
            <Tab eventKey="details" title="Name & Details">
              <h1>Name and Details </h1>
            </Tab>
            <Tab eventKey="active-tab" title="Set Scope">
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

        <div className="footer-button">
          <Button
            className="program-continue"
            onClick={() => history.push("###")}
          >
            Continue
          </Button>
        </div>
      </div>
    </Container>
  );
};
export default Details;
