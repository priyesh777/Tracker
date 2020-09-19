import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import thumbnail from "../../../images/pic_upload.png";
import { Button, Card, message } from "antd";
import { Row, Col } from "react-bootstrap";
import BackArrow from "../../../images/arrow-left.svg";
// import ProgramInfo from "./ProgramInfo";
import SubmissionCard from "./SubmissionCard";
import MainPanel from "../MainPanel";
import { GetApi } from "../../../api/callapi";
import { ProgramDetailLink } from "../../../api/endpoints";

const SubmissionForm = props => {
  const { Meta } = Card;
  const history = useHistory();
  const cardId = props.match.params.id;

  const url = ProgramDetailLink + cardId;
  // const [tabKey, setTabKey] = useState("submission_form");

  const [programDetail, setProgramDetail] = useState({
    name: "",
    description: ""
  });

  useEffect(() => {
    init();
  }, []);

  const init = async e => {
    const response = await GetApi(url);
    if (response.status === 200) {
      let responseData = response.data;
      setProgramDetail(responseData);
    } else {
      message.error("Sorry couldn't load Program-details right now");
    }
  };
  console.log("Program namess :::", programDetail);

  return (
    <>
      <MainPanel>
        <Row>
          <Col md={6} style={{ paddingLeft: "3%" }}>
            <div className="back-button">
              <Button
                className="user-back-button"
                onClick={() => history.push(`/main_panel/programs/${cardId}`)}
              >
                <img src={BackArrow} alt="back-arrow-left" /> Back
              </Button>
            </div>
            <div className="program-name-card">
              <Card hoverable>
                <div className="title-description">
                  <Meta
                    avatar={
                      <img
                        src={thumbnail}
                        alt="program-thumbnail"
                        style={{ height: "100px" }}
                      />
                    }
                    title={
                      <p className="card-title">
                        {programDetail && programDetail.name}
                      </p>
                    }
                    description={
                      <>
                        <p>
                          {programDetail &&
                            programDetail.description.replace(
                              /(<([^>]+)>)/gi,
                              ""
                            )}
                        </p>
                      </>
                    }
                  />
                </div>
              </Card>
            </div>

            <SubmissionCard cardId={cardId} />
            {/* <div className="details-form-tab" style={{ marginTop: "3%" }}>
              <Tabs
                defaultActiveKey="submission_form"
                id="uncontrolled-tab-example"
                onSelect={e => setTabKey(e)}
              >
                <Tab eventKey="program_info" title="Program Details">
                  <ProgramInfo />
                </Tab>
                <Tab eventKey="submission_form" title="Submission Form"></Tab>
              </Tabs>
            </div> */}
          </Col>

          <Col md={6}>
            <div className="submission-reward">
              <div className="content-header">Reward range vulnerability</div>
              <div className="bounty">
                <Card
                  hoverable
                  className="bounty-price"
                  style={{ width: "40%" }}
                >
                  <p className="instruction">Bounty</p>
                  <p className="card-number-data">$25 - $100</p>
                </Card>
                <Card
                  hoverable
                  className="points"
                  style={{ width: "28%", marginLeft: "3%" }}
                >
                  <p className="instruction">Points</p>
                  <p className="card-number-data">1 - 200</p>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </MainPanel>
    </>
  );
};
export default SubmissionForm;
