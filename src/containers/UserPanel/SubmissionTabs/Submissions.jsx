import React, { useState, useEffect } from "react";
import { Row, Tabs, Tab } from "react-bootstrap";
import SubmissionData from "./SubmissionData";
import SubmissionDetail from "./SubmissionDetails";
import MainPanel from "../MainPanel";
import { GetApi } from "../../../api/callapi";
import { SubmissionLink } from "../../../api/endpoints";
import { toast } from "react-toastify";

const Submissions = () => {
  const [subDetails, setSubDetails] = useState(false);
  const [submissionInfo, setSubmissionInfo] = useState([]);

  const openSubmission = () => {
    setSubDetails(true);
  };

  const closeSubmission = () => {
    setSubDetails(false);
  };

  const [Url, setUrl] = useState(SubmissionLink);

  useEffect(() => {
    init();
  }, [Url]);

  const init = async e => {
    const response = await GetApi(Url);
    if (response.status === 200) {
      let responseData = response.data;
      setSubmissionInfo(responseData.results);
    } else {
      toast.error("Sorry couldn't load Program-details right now");
    }
  };

  const handleTab = e => {
    setUrl(SubmissionLink + "?status=" + e);
  };

  return (
    <>
      <MainPanel>
        <Row>
          <div className="submissions-content">
            {!subDetails && (
              <Tabs
                defaultActiveKey=""
                id="uncontrolled-tab-example"
                onSelect={e => handleTab(e)}
              >
                <Tab eventKey="" title="All">
                  <SubmissionData
                    subDetails={subDetails}
                    openSubmission={openSubmission}
                    submissionInfo={submissionInfo}
                  />
                </Tab>
                <Tab eventKey="New" title="To review">
                  <SubmissionData
                    subDetails={subDetails}
                    openSubmission={openSubmission}
                    submissionInfo={submissionInfo}
                  />
                </Tab>
                <Tab eventKey="ToFix" title="To Fix">
                  <SubmissionData
                    subDetails={subDetails}
                    openSubmission={openSubmission}
                    submissionInfo={submissionInfo}
                  />
                </Tab>
                <Tab eventKey="Fixed" title="Fixed Bugs">
                  <SubmissionData
                    subDetails={subDetails}
                    openSubmission={openSubmission}
                    submissionInfo={submissionInfo}
                  />
                </Tab>
                <Tab eventKey="Invalid" title="Invalid Bugs">
                  <SubmissionData
                    subDetails={subDetails}
                    openSubmission={openSubmission}
                    submissionInfo={submissionInfo}
                  />
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
