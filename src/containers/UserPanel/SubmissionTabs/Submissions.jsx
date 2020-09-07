import React, { useState } from "react";
import { Row, Tabs, Tab } from "react-bootstrap";
import AllSubmissions from "./AllSubmissions";
import SubmissionDetail from "./SubmissionDetails";
import MainPanel from "../MainPanel";

const Submissions = () => {
  const [subDetails, setSubDetails] = useState(false);

  const openSubmission = () => {
    setSubDetails(true);
  };

  const closeSubmission = () => {
    setSubDetails(false);
  };

  return (
    <>
      <MainPanel>
        <Row>
          <div className="submissions-content">
            {!subDetails && (
              <Tabs defaultActiveKey="active-tab" id="uncontrolled-tab-example">
                <Tab eventKey="active-tab" title="All">
                  <AllSubmissions
                    subDetails={subDetails}
                    openSubmission={openSubmission}
                  />
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
            )}
            {subDetails && (
              <SubmissionDetail closeSubmission={closeSubmission} />
            )}
          </div>
        </Row>
      </MainPanel>
    </>
  );
};
export default Submissions;
