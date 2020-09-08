import React, { useState } from "react";
import { Card, List, Avatar } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Row, Col, Tabs, Tab } from "react-bootstrap";
import BugGraph from "./BugGraph";
import MainPanel from "../MainPanel";

const UserPanel = props => {
  const { Meta } = Card;

  const [tabKey, setTabKey] = useState("valid_bugs");

  const cardData = [
    {
      researcher: "John Doe",
      location: "lalitpur",
      rewards: "rewards per vulnerability"
    },
    {
      researcher: "Maggie Doyne",
      location: "kathmandu",
      rewards: "rewards per vulnerability"
    },
    {
      researcher: "James Doyne",
      location: "Bhaktapur",
      rewards: "rewards per vulnerability"
    }
  ];

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
  console.log("reached Main JS ");
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
                        <p className="card-number-data">18</p>
                      </Card>
                    </Col>
                    <Col span={2}>
                      <Card
                        hoverable
                        className="highest-reward"
                        style={{ width: "102%" }}
                      >
                        <p className="instruction">Invalid-Bugs</p>
                        <p className="card-number-data">24</p>
                      </Card>
                    </Col>
                    <Col span={2}>
                      <Card
                        hoverable
                        className="average-reward"
                        style={{ width: "102%" }}
                      >
                        <p className="instruction">Bugs-Solved</p>
                        <p className="card-number-data">23</p>
                      </Card>
                    </Col>
                    <Col span={2}>
                      <Card
                        hoverable
                        className="total-reward"
                        style={{ width: "113%" }}
                      >
                        <p className="instruction">Bugs-Unsolved</p>
                        <p className="card-number-data">12</p>
                      </Card>
                    </Col>
                    <Col span={2}>
                      <Card
                        hoverable
                        className="average-reward"
                        style={{ width: "100%" }}
                      >
                        <p className="instruction">Rewarded</p>
                        <p className="card-number-data">23</p>
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
                  {cardData.map((data, index) => (
                    <Card
                      hoverable
                      className="card-box"
                      actions={[
                        <p className="reward">$23</p>,
                        <p className="points">10 Pts</p>
                      ]}
                      key={`programCard-${index}`}
                    >
                      <div className="title-description">
                        <Meta
                          avatar={<Avatar src="random.png" />}
                          title={data.researcher}
                          description={<p>{data.location}</p>}
                        />
                        <Meta
                          description={
                            <>
                              <p>{data.rewards}</p>
                            </>
                          }
                        />
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
