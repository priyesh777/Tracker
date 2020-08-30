import React from "react";
import { Card, List, Avatar, Tabs } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Row, Col } from "react-bootstrap";

const UserPanel = props => {
  const { TabPane } = Tabs;
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
              <Tabs defaultActiveKey="1" type="card" size="small">
                <TabPane tab="Bugs Submitted" key="1">
                  Content of Bugs Submitted
                </TabPane>
                <TabPane tab=" Valid Bugs" key="2">
                  Content of Valid Bugs
                </TabPane>
                <TabPane tab="Invalid Bugs" key="3">
                  Content of Invalid Bugs
                </TabPane>
                <TabPane tab="Bugs solved" key="4">
                  Content of Bugs solved
                </TabPane>
                <TabPane tab="Bugs unsolved" key="5">
                  Content of Bugs unsolved
                </TabPane>
              </Tabs>
            </div>
          </Row>

          <Row>
            <div className="available-programs">
              <div className="content-header">Available programs</div>
              <div className="cards">
                <Row gutter={12}>
                  <Col span={2}>
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
                                <p>{data.rewards}</p>
                              </>
                            }
                          />
                        </div>
                      </Card>
                    ))}
                  </Col>
                </Row>
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
