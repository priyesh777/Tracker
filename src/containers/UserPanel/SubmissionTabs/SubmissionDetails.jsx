import React, { useState } from "react";
import thumbnail from "../../../images/pic_upload.png";
import { Button, Card, Avatar, Comment, Tooltip, Input } from "antd";
import { Row, Col } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
import BackArrow from "../../../images/arrow-left.svg";
import RightArrow from "../../../images/arrow-right.svg";
import moment from "moment";

const SubmissionDetail = props => {
  const { Meta } = Card;

  const [programData] = useState({
    title: "Program one",
    description:
      "Facilis unde sit nam ut labore et maiores eum. Dolorem quisquam atque",
    details:
      "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem i",
    rules:
      " ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
  });

  const activity = [
    { user_name: "James Witwicky", detail: "Created Report in June 11" },
    { user_name: "Janet Joplin", detail: "Changed Status to Approved" }
  ];

  const comments = [
    {
      author: "Janet Doe",
      content: "We supply a series of design principles, practical patterns"
    },
    {
      author: "James Regal",
      content:
        " perspiciatis unde omnis iste natus error sit voluptatem accusantium"
    }
  ];

  const handleBackButton = () => {
    props.closeSubmission();
  };

  return (
    <>
      <Row>
        <Col lg={6}>
          <div className="back-button">
            <Button className="user-back-button" onClick={handleBackButton}>
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
                      <p>
                        Submitted by{" "}
                        <text style={{ color: "#ad77c0", fontWeight: "bold" }}>
                          Jane Doe
                        </text>
                      </p>
                    </>
                  }
                />
              </div>
            </Card>
          </div>

          <div className="approve-button">
            <Button className="Purple-button">Approve Bug Report</Button>
            <Button className="white-button">Disapprove Bug Report</Button>
          </div>

          <div className="program-name-card">
            <Card hoverable>
              <div
                className="title-description"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Meta
                  title={<p className="card-title">Status</p>}
                  description={
                    <>
                      <p>Approved</p>
                    </>
                  }
                />
                <Meta
                  title={<p className="card-title">Target Severity</p>}
                  description={
                    <>
                      <p>High</p>
                    </>
                  }
                />
              </div>
              <div className="title-description">
                <Meta
                  title={<p className="card-title">Submitted On</p>}
                  description={
                    <>
                      <p> 21-03-2019</p>
                    </>
                  }
                />
              </div>
            </Card>
          </div>

          <div className="program-details-card">
            <Card hoverable>
              <div className="title-description">
                <Meta
                  title={<p className="card-title">Report ID</p>}
                  description={
                    <>
                      <p> sdfsf9e8sn9d8fs98 fmgt9er8tw9et87e9au9we8r</p>
                    </>
                  }
                />
              </div>
              <div className="title-description" style={{ marginTop: "2%" }}>
                <Meta
                  title={<p className="card-title">Vulnerability Title</p>}
                  description={
                    <>
                      <p> XSS Vulnerability</p>
                    </>
                  }
                />
              </div>
              <div className="title-description" style={{ marginTop: "2%" }}>
                <Meta
                  title={<p className="card-title">Target</p>}
                  description={
                    <>
                      <a
                        href="### https://website.com/abc/abc/api/more"
                        style={{ color: "#ad77c0", fontWeight: "bold" }}
                      >
                        https://website.com/abc/abc/api/more
                      </a>
                    </>
                  }
                />
              </div>
              <div className="title-description" style={{ marginTop: "2%" }}>
                <Meta
                  title={<p className="card-title">Target Category</p>}
                  description={
                    <>
                      <p> XSS Vulnerability</p>
                    </>
                  }
                />
              </div>
              <div className="title-description" style={{ marginTop: "2%" }}>
                <Meta
                  title={<p className="card-title">Vulnerability Category</p>}
                  description={
                    <>
                      <p> XSS Vulnerability</p>
                    </>
                  }
                />
              </div>

              <div className="title-description" style={{ marginTop: "2%" }}>
                <Meta
                  title={<p className="card-title">URL</p>}
                  description={
                    <>
                      <a
                        href="### https://website.com/abc/abc/api/more"
                        style={{ color: "#ad77c0", fontWeight: "bold" }}
                      >
                        https://website.com/abc/abc/api/more
                      </a>
                    </>
                  }
                />
              </div>
              <div className="title-description" style={{ marginTop: "2%" }}>
                <Meta
                  title={
                    <p className="card-title">Vulnerability Description</p>
                  }
                  description={
                    <>
                      <p>
                        ed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem i ed ut perspiciatis unde
                        omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                      </p>
                    </>
                  }
                />
              </div>
            </Card>
          </div>
        </Col>

        <Col lg={6}>
          <div className="submission-reward">
            <div className="content-header">Reward range vulnerability</div>
            <div className="bounty">
              <Card hoverable className="bounty-price" style={{ width: "40%" }}>
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

          <div className="recent-activity">
            <div className="header">Recent Activity</div>
            {activity.map(data => (
              <>
                <Card hoverable className="activity-card">
                  <Meta
                    avatar={<Avatar src="random.png" />}
                    title={<p className="card-title">{data.user_name}</p>}
                    description={<text>{data.detail}</text>}
                  />
                </Card>
              </>
            ))}
          </div>

          <div className="comment-section">
            <div className="header">Recent Comments</div>
            <Card className="comment-card">
              {comments.map(data => (
                <Comment
                  className="each-comment"
                  // actions={actions}
                  author={
                    <a href="##" className="author">
                      {data.author}
                    </a>
                  }
                  avatar={
                    <Avatar
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      alt="user-pic"
                    />
                  }
                  content={<p>{data.content}</p>}
                  datetime={
                    <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                      <span>{moment().fromNow()}</span>
                    </Tooltip>
                  }
                />
              ))}
            </Card>
            <Card className="comment-card">
              <Input
                type="text"
                className="comment-input"
                placeholder="Write a comment"
              />
              <Button className="Purple-button">
                <img src={RightArrow} alt="arrow-right" />
              </Button>
            </Card>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default SubmissionDetail;
