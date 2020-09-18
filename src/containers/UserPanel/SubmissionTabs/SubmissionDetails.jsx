import React, { useState, useEffect } from "react";
import thumbnail from "../../../images/pic_upload.png";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  Avatar,
  Comment,
  Tooltip,
  Input,
  Divider,
  Tag,
  Form
} from "antd";
// import { ArrowUpOutlined } from "@ant-design/icons";
import { Row, Col } from "react-bootstrap";
import BackArrow from "../../../images/arrow-left.svg";
import RightArrow from "../../../images/arrow-right.svg";
import moment from "moment";
import MainPanel from "../MainPanel";
import { GetApi } from "../../../api/callapi";
import { SubmissionDetailLink } from "../../../api/endpoints";
import { toast } from "react-toastify";
import { CheckCircleFilled, BugFilled } from "@ant-design/icons";

const SubmissionDetail = props => {
  const { Meta } = Card;
  const history = useHistory();

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

  const [approved, setApproved] = useState(false);
  const [reportState, setReportState] = useState(false);

  const [submissionDetail, setSubmissionDetail] = useState({});

  const cardId = props.match.params.id;

  const url = SubmissionDetailLink + cardId;

  useEffect(() => {
    init();
  }, []);

  const init = async e => {
    const response = await GetApi(url);
    if (response.status === 200) {
      let responseData = response.data;
      setSubmissionDetail(responseData);
    } else {
      toast.error("Sorry couldn't load Program-details right now");
    }
  };

  console.log("submissionDetail :::", submissionDetail);

  const handleApprove = () => {
    setApproved(true);
    setReportState(true);
  };

  const handleDisapprove = () => {
    setApproved(true);
  };

  return (
    <>
      <MainPanel>
        <Row>
          <Col md={6} style={{ paddingLeft: "3%" }}>
            <div className="back-button">
              <Button
                className="user-back-button"
                onClick={() => history.push("/main_panel/submissions")}
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
                        <>
                          <span>
                            {submissionDetail && submissionDetail.title}
                          </span>
                        </>
                      </p>
                    }
                    description={
                      <>
                        <p>
                          {submissionDetail && submissionDetail.description}
                        </p>
                        <p>
                          Submitted by{" "}
                          <span
                            style={{ color: "#ad77c0", fontWeight: "bold" }}
                          >
                            {submissionDetail && submissionDetail.creator}
                          </span>
                          <span style={{ marginLeft: "10px" }}>
                            {submissionDetail && submissionDetail.to_nas ? (
                              <CheckCircleFilled style={{ color: "green" }} />
                            ) : (
                              <BugFilled style={{ color: "#ad77c0" }} />
                            )}
                          </span>
                        </p>
                      </>
                    }
                  />
                </div>
              </Card>
            </div>

            <div className="approve-button">
              {approved ? (
                <div className="approve-card" style={{ width: "100%" }}>
                  {reportState ? (
                    <>
                      <Card style={{ height: "200px" }}>
                        <Form>
                          <p
                            style={{ fontWeight: "bold", fontFamily: "Karla" }}
                          >
                            Reward the report
                          </p>
                          <p
                            style={{
                              display: "flex",
                              justifyContent: "space-between"
                            }}
                          >
                            <div className="select-box">
                              <select className="select-authority" name="type">
                                <option value="">-- Select --</option>
                                <option value="bounty" className="option">
                                  Bounty
                                </option>
                                <option value="points" className="option">
                                  Points
                                </option>
                              </select>
                            </div>

                            <div style={{ marginLeft: "10px" }}>
                              <Input
                                style={{ width: "60%" }}
                                name="report_amount"
                                className="input-box"
                                type="number"
                                placeholder="Enter your amount"
                              />
                              <Button
                                type="submit"
                                className="Purple-button"
                                style={{ marginLeft: "10px", width: "80px" }}
                              >
                                Submit
                              </Button>
                            </div>
                          </p>
                          <p
                            style={{ fontWeight: "bold", fontFamily: "Karla" }}
                          >
                            Change the Bug Status
                            <div
                              className="select-box"
                              style={{ marginTop: "10px" }}
                            >
                              <select className="select-authority" name="type">
                                <option value="">-- Select --</option>
                                <option value="bounty" className="option">
                                  Approved
                                </option>
                                <option value="to_fix" className="option">
                                  To Fix
                                </option>
                                <option value="resolved" className="option">
                                  Resolved
                                </option>
                              </select>
                            </div>
                          </p>
                        </Form>
                      </Card>
                    </>
                  ) : (
                    <>
                      <Card style={{ height: "120px" }}>
                        <Meta
                          title={
                            <p
                              style={{
                                fontWeight: "bold",
                                fontFamily: "Karla"
                              }}
                            >
                              BugNas Verification Status
                            </p>
                          }
                          description={
                            <>
                              <Tag color="magenta">Not approved</Tag>
                            </>
                          }
                        />
                      </Card>
                    </>
                  )}
                </div>
              ) : (
                <>
                  <Button className="Purple-button" onClick={handleApprove}>
                    Approve Bug Report
                  </Button>
                  <Button className="white-button" onClick={handleDisapprove}>
                    Disapprove Bug Report
                  </Button>
                </>
              )}
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
                        <Tag color="green">
                          {submissionDetail && submissionDetail.status}
                        </Tag>
                      </>
                    }
                  />
                  <Meta
                    title={<p className="card-title">Target Severity</p>}
                    description={
                      <>
                        <Tag color="red">
                          {submissionDetail && submissionDetail.severity}
                        </Tag>
                      </>
                    }
                  />
                </div>
                <div className="title-description" style={{ marginTop: "3%" }}>
                  <Meta
                    title={<p className="card-title">Submitted On</p>}
                    description={
                      <>
                        <p style={{ fontWeight: "bold" }}>
                          {moment(
                            submissionDetail && submissionDetail.created_at
                          ).format("YYYY-MM-DD")}
                        </p>
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
                        <p>{submissionDetail && submissionDetail.program}</p>
                      </>
                    }
                  />
                </div>
                <div className="title-description" style={{ marginTop: "2%" }}>
                  <Meta
                    title={<p className="card-title">Vulnerability Title</p>}
                    description={
                      <>
                        <p>
                          {submissionDetail &&
                            submissionDetail.vulnerability_type}
                        </p>
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
                          {submissionDetail && submissionDetail.url}
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
                        <p>{submissionDetail && submissionDetail.target}</p>
                      </>
                    }
                  />
                </div>
                <div className="title-description" style={{ marginTop: "2%" }}>
                  <Meta
                    title={<p className="card-title">Vulnerability Category</p>}
                    description={
                      <>
                        <p>{submissionDetail && submissionDetail.issue_type}</p>
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
                          {submissionDetail && submissionDetail.url}
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
                          {submissionDetail && submissionDetail.description}
                        </p>
                      </>
                    }
                  />
                </div>
              </Card>
            </div>
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

            <div className="recent-activity">
              <div className="header">Recent Activity</div>
              {submissionDetail.report_assign &&
                submissionDetail.report_assign.map(data => (
                  <>
                    <Card hoverable className="activity-card">
                      <Meta
                        avatar={<Avatar src={data && data.assign_by_image} />}
                        title={
                          <p className="card-title">
                            {data && data.assign_by_name}
                          </p>
                        }
                        description={
                          <span style={{ fontWeight: "bold" }}>
                            Report assigned by {data && data.assigned_by} to{" "}
                            {data && data.assigned_to}
                          </span>
                        }
                      />
                    </Card>
                  </>
                ))}
            </div>

            <div className="comment-section">
              <div className="header">Recent Comments</div>
              <Card className="comment-card">
                {comments.map(data => (
                  <>
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
                    <Divider />
                  </>
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
      </MainPanel>
    </>
  );
};
export default SubmissionDetail;
