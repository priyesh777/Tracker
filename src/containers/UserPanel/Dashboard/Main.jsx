import React from "react";
import { Card } from "antd";
import { Row, Col } from "react-bootstrap";

const UserPanel = props => {
  return (
    <>
      <Col lg={12}>
        <Row>
          <div className="dashboard-overview">
            <div className="content-header">Overview</div>
            <div className="bounty">
              <Card hoverable className="reward" style={{ width: "15%" }}>
                <p className="instruction">Bugs Submitted</p>
                <p className="card-number-data">18</p>
              </Card>
              <Card
                hoverable
                className="highest-reward"
                style={{ marginLeft: "3%", width: "20%" }}
              >
                <p className="instruction">Invalid Bugs</p>
                <p className="card-number-data">$14550</p>
              </Card>
              <Card
                hoverable
                className="average-reward"
                style={{ width: "20%", marginLeft: "3%" }}
              >
                <p className="instruction">Bugs solved</p>
                <p className="card-number-data">$400</p>
              </Card>
              <Card
                hoverable
                className="total-reward"
                style={{ width: "15%", marginLeft: "3%" }}
              >
                <p className="instruction">Bugs unsolved</p>
                <p className="card-number-data">$25330</p>
              </Card>
            </div>
          </div>
        </Row>
      </Col>
    </>
  );
};
export default UserPanel;
