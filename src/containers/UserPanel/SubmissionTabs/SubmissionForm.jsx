import React, { useState } from "react";
import thumbnail from "../../../images/pic_upload.png";
import { Button, Card } from "antd";
import { Row, Col } from "react-bootstrap";
import BackArrow from "../../../images/arrow-left.svg";
// import ProgramInfo from "./ProgramInfo";
import SubmissionCard from "./SubmissionCard";
import MainPanel from "../MainPanel";

const SubmissionForm = props => {
  const { Meta } = Card;

  const [tabKey, setTabKey] = useState("submission_form");

  console.log("Submisssion form tabkey ::", tabKey);

  const [programData] = useState({
    title: "Program one",
    description:
      "Facilis unde sit nam ut labore et maiores eum. Dolorem quisquam atque",
    details:
      "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem i",
    rules:
      " ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
  });

  return (
    <>
      <MainPanel>
        <Row>
          <Col md={6} style={{ paddingLeft: "3%" }}>
            <div className="back-button">
              <Button
                className="user-back-button"
                onClick={props.closeSubmission}
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
                    title={<p className="card-title">{programData.title}</p>}
                    description={
                      <>
                        <p>{programData.description}</p>
                      </>
                    }
                  />
                </div>
              </Card>
            </div>

            <SubmissionCard />
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
