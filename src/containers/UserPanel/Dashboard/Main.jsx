import React, { useState, useEffect } from "react";
import { Card, List, Avatar } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import BugGraph from "./BugGraph";
import MainPanel from "../MainPanel";
import { toast } from "react-toastify";
import { GetApi } from "../../../api/callapi";
import { PerformanceStatLink, AllProgramsLink } from "../../../api/endpoints";
import { CheckCircleFilled, BugFilled } from "@ant-design/icons";
import moment from "moment";

const UserPanel = props => {
  const { Meta } = Card;

  const [tabKey, setTabKey] = useState("valid_bugs");

  const [performanceStat, setPerformanceStat] = useState({});
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async e => {
    const responseOne = await GetApi(PerformanceStatLink);
    const responseTwo = await GetApi(AllProgramsLink);

    if (responseOne.status === 200) {
      let responseData = responseOne.data;
      let responseCard = responseTwo.data.results;
      setPerformanceStat(responseData);
      setCardInfo(responseCard);
    } else {
      toast.error("Sorry couldn't load rewards information");
    }
  };

  const nameList = [
    {
      title: "Jannet Doe",
      description: "#1",
      points: "1.4K",
      ratings: 3
    },
    {
      title: "John Doe",
      description: "#2",
      points: "1.4K",
      ratings: 4
    },
    {
      title: "Bruce Wayne",
      description: "#3",
      points: "1.4K",
      ratings: 3
    },
    {
      title: "Ramsey",
      description: "#4",
      points: "1.4K",
      ratings: 2
    }
  ];
  return (
    <>
      <MainPanel>
        <Row>
          <Col lg={8}>
            <Row>
              <div className="dashboard-overview">
                <div className="content-header">Your Performance</div>
                <div className="bounty">
                  <Row>
                    <Col span={2}>
                      <Card
                        hoverable
                        className="reward"
                        style={{ width: "100%", marginLeft: "7%" }}
                      >
                        <p className="instruction">Bugs-Found</p>
                        <p className="card-number-data">
                          {performanceStat.valid_report}
                        </p>
                      </Card>
                    </Col>
                    <Col span={2}>
                      <Card
                        hoverable
                        className="highest-reward"
                        style={{ width: "102%" }}
                      >
                        <p className="instruction">Invalid-Bugs</p>
                        <p className="card-number-data">
                          {performanceStat.invalid_report}
                        </p>
                      </Card>
                    </Col>
                    <Col span={2}>
                      <Card
                        hoverable
                        className="average-reward"
                        style={{ width: "102%" }}
                      >
                        <p className="instruction">Bugs-Solved</p>
                        <p className="card-number-data">
                          {performanceStat.fixed_report}
                        </p>
                      </Card>
                    </Col>
                    <Col span={2}>
                      <Card
                        hoverable
                        className="total-reward"
                        style={{ width: "113%" }}
                      >
                        <p className="instruction">Bugs-Unsolved</p>
                        <p className="card-number-data">
                          {performanceStat.to_fix_report}
                        </p>
                      </Card>
                    </Col>
                    <Col span={2}>
                      <Card
                        hoverable
                        className="average-reward"
                        style={{ width: "100%" }}
                      >
                        <p className="instruction">Rewarded</p>
                        <p className="card-number-data">
                          {performanceStat.total_report}
                        </p>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </div>
            </Row>

            <Row>
              <div className="graph-tabs">
                <Tabs
                  defaultActiveKey="valid_bugs"
                  id="uncontrolled-tab-example"
                  onSelect={e => setTabKey(e)}
                >
                  <Tab eventKey="bugs_found" title="Bugs Found">
                    <BugGraph tabKey={tabKey} />
                  </Tab>
                  <Tab eventKey="valid_bugs" title="Valid Bugs">
                    <BugGraph tabKey={tabKey} />
                  </Tab>
                  <Tab eventKey="invalid_bugs" title="Invalid Bugs">
                    <BugGraph tabKey={tabKey} />
                  </Tab>
                  <Tab eventKey="bugs_unsolved" title="Bugs unsolved">
                    <BugGraph tabKey={tabKey} />
                  </Tab>
                  <Tab eventKey="bugs_solved" title="Bugs Solved">
                    <BugGraph tabKey={tabKey} />
                  </Tab>
                </Tabs>
              </div>
            </Row>

            <Row>
              <div className="available-programs" style={{ width: "100%" }}>
                <div className="content-header">Available programs</div>
                <div className="card-list" style={{ width: "100%" }}>
                  {cardInfo.map((data, index) => (
                    <Card
                      hoverable
                      className="card-box"
                      actions={[
                        <p className="reward">
                          ${data && data.point_only ? "" : data.bounty}
                        </p>,
                        <p className="points">
                          {data && data.point_only ? "Pts only" : ""}
                        </p>
                      ]}
                      key={`programCard-${index}`}
                    >
                      <div className="title-description">
                        <Meta
                          avatar={<Avatar src="random.png" />}
                          title={
                            <>
                              <span>{data && data.name}</span>
                              <span style={{ marginLeft: "10px" }}>
                                {data && data.to_nas ? (
                                  <CheckCircleFilled
                                    style={{ color: "green" }}
                                  />
                                ) : (
                                  <BugFilled style={{ color: "#ad77c0" }} />
                                )}
                              </span>
                            </>
                          }
                          description={moment(data && data.created_at).format(
                            "YYYY-MM-DD"
                          )}
                        />
                        {/* <Meta
                          description={
                            <>
                              <p>{data.rewards}</p>
                            </>
                          }
                        /> */}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Row>
          </Col>
          <Col lg={4}>
            <div className="researchers-card" style={{ marginTop: "6%" }}>
              <div className="content-header">Researchers</div>
              <div className="name-list">
                <Card hoverable>
                  <List
                    itemLayout="horizontal"
                    dataSource={nameList}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar src="random.png" />}
                          title={
                            <p style={{ marginBottom: "0px" }}>{item.title}</p>
                          }
                          description={
                            <>
                              <a href="##" disabled>
                                {item.description}
                              </a>
                              <a
                                href="##"
                                disabled
                                style={{ marginLeft: "10%" }}
                              >
                                {item.points}pts
                              </a>
                              <a href="##" disabled style={{ float: "right" }}>
                                {item.ratings && item.ratings >= 3 ? (
                                  <a
                                    href="##"
                                    disabled
                                    style={{ color: "green" }}
                                  >
                                    <ArrowUpOutlined /> {item.ratings}
                                  </a>
                                ) : (
                                  <a
                                    href="##"
                                    disabled
                                    style={{ color: "red" }}
                                  >
                                    <ArrowDownOutlined /> {item.ratings}
                                  </a>
                                )}
                              </a>
                            </>
                          }
                        />
                      </List.Item>
                    )}
                  />
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </MainPanel>
    </>
  );
};
export default UserPanel;
