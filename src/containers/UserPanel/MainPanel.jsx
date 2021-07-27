import React from "react";
import { Row, Col } from "react-bootstrap";
import SideBar from "./SideBar";

function MainPanel(props) {
  return (
    <>
      <div className="container-fluid">
        <Row sm={2} md={2}>
          <Col lg={3} style={{ padding: "0px" }}>
            <SideBar />
          </Col>

          <Col lg={9} style={{ background: "#f7f7f7" }}>
            {props.children}
          </Col>
        </Row>
      </div>
    </>
  );
}
export default MainPanel;
