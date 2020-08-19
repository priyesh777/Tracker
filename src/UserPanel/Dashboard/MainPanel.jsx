import React from "react";
import { Row, Col } from "antd";
import Question from "../../images/question-mark.svg";
import SideBar from "./SideBar";
import Researchers from "./Researchers";
import Statistics from "./Statistics";

const MainPanel = () => {
  return (
    <>
      <div className="container" style={{ marginLeft: "70px" }}>
        <Row span={24}>
          <Col span={4}>
            <SideBar />
          </Col>
          <Col span={12} style={{ background: "#E5E5E5" }}>
            <Statistics />
            <Row>Performance row</Row>
            <Row>Available Program</Row>
          </Col>
          <Col span={8} style={{ background: "rgb(240 234 234)" }}>
            <div className="researchers" style={{ padding: "31px" }}>
              <div
                className="researcher-card-head"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h4>Researchers</h4>
                <img src={Question} alt="question-mark" />
              </div>
              <div className="researchers-card">
                <Researchers />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default MainPanel;
