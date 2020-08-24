import React from "react";
import { Button, Card } from "antd";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import BackArrow from "../../images/arrow-left.svg";

const ProgramDetails = () => {
  const history = useHistory();

  return (
    <>
      <Row>
        <Col lg={8}>
          <div className="program-details">
            <div className="back-button">
              <Button
                className="user-back-Button"
                onClick={() => {
                  history.push("###back to programList");
                }}
              >
                <img src={BackArrow} alt="back-arrow-left" /> Back
              </Button>
            </div>
          </div>
        </Col>
        <Col lg={4}>
          <div className="reward-range">
            <div className="content-header">Reward range vulnerability</div>
            <div className="bounty">
              <Card hoverable>
                <p className="instruction">Bounty</p>
                <p className="card-number-data">$25 - $100</p>
              </Card>
            </div>
            <div className="bounty">
              <Card hoverable>
                <p className="instruction">Points</p>
                <p className="card-number-data">1 - 200</p>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default ProgramDetails;
