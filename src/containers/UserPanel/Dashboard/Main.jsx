import React from "react";
import { Card, List, Avatar } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Row, Col, Tabs, Tab } from "react-bootstrap";

const UserPanel = props => {
  // const { TabPane } = Tabs;
  const { Meta } = Card;

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

  return (
    <>
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
                      style={{ width: "100%" }}
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
            <div
              className="graph-tabs"
              style={{ marginTop: "3%", width: "100%" }}
            >
              <Tabs defaultActiveKey="valid_bugs" id="uncontrolled-tab-example">
                <Tab eventKey="bugs_found" title="Bugs Found">
                  <h1>Bugs Found</h1>
                </Tab>
                <Tab eventKey="valid_bugs" title="Valid Bugs">
                  <h1>Valid Bugs</h1>
                </Tab>
                <Tab eventKey="invalid_bugs" title="Invalid Bugs">
                  <h1>Invalid Bugs</h1>
                </Tab>
                <Tab eventKey="bugs_unsolved" title="Bugs unsolved">
                  <h1>Bugs Unsolved</h1>
                </Tab>
                <Tab eventKey="bugs_solved" title="Bugs Solved">
                  <h1>Bugs Solved</h1>
                </Tab>
              </Tabs>
            </div>
          </Row>

          <Row>
            <div className="available-programs" style={{ width: "100%" }}>
              <div className="content-header">Available programs</div>
              <div className="card-list" style={{ width: "100%" }}>
                {cardData.map(data => (
                  <Card
                    hoverable
                    className="card-box"
                    actions={[
                      <p className="reward">$23</p>,
                      <p className="points">10 Pts</p>
                    ]}
                  >
                    <div className="title-description">
                      <Meta
                        avatar={<Avatar src="random.png" />}
                        title={data.researcher}
                        description={
                          <>
                            <p>{data.location}</p>
                            <p style={{ marginTop: "3%" }}>{data.rewards}</p>
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
          <div className="researchers-card">
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
                            <text>{item.description}</text>
                            <text style={{ marginLeft: "10%" }}>
                              {item.points}pts
                            </text>
                            <text style={{ float: "right" }}>
                              {item.ratings && item.ratings >= 3 ? (
                                <text style={{ color: "green" }}>
                                  <ArrowUpOutlined /> {item.ratings}
                                </text>
                              ) : (
                                <text style={{ color: "red" }}>
                                  <ArrowDownOutlined /> {item.ratings}
                                </text>
                              )}
                            </text>
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
    </>
  );
};
export default UserPanel;
