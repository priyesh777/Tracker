import React from "react";
import { Row, Tabs, Tab } from "react-bootstrap";
import AllSubmissions from "./AllSubmissions";

const Submissions = () => {
  return (
    <>
      <div className="submissions-content">
        <Row>
          <Tabs defaultActiveKey="active-tab" id="uncontrolled-tab-example">
            <Tab eventKey="active-tab" title="All">
              <AllSubmissions />
            </Tab>
            <Tab eventKey="to-review" title="To review">
              <h1>Review-tab</h1>
            </Tab>
            <Tab eventKey="to-fix" title="To Fix">
              <h1>To-fix tab</h1>
            </Tab>
            <Tab eventKey="fixed-bugs" title="Fixed Bugs">
              <h1>Fixed Bugs Tab</h1>
            </Tab>
            <Tab eventKey="invalid-bugs" title="Invalid Bugs">
              <h1>Invalid Bugs Tab</h1>
            </Tab>
          </Tabs>
        </Row>
      </div>
    </>
  );
};
export default Submissions;
