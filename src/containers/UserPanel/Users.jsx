import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Avatar } from "antd";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import { Row, Button, Col } from "react-bootstrap";
import MainPanel from "./MainPanel";

const Users = () => {
  const history = useHistory();

  const { Meta } = Card;

  const cardData = [
    {
      user_name: "John doe",
      authority: "reporter",
      reports_review: 12
    },
    {
      user_name: "Maggie Doyne",
      authority: "Administrator",
      reports_review: 24
    },
    {
      user_name: "Jack Black",
      authority: "reporter",
      reports_review: 48
    }
  ];

  const handleCard = () => {
    console.log("clicked user-card ::");
  };

  return (
    <>
      <MainPanel>
        <Row>
          <Col>
            <div className="users-content">
              <div className="content-header">Admin and reporters</div>

              <div className="card-list">
                <Row gutter={16}>
                  {cardData.map(data => (
                    <Card
                      hoverable
                      className="card-box"
                      onClick={e => handleCard(e)}
                    >
                      <div className="title-description">
                        <Meta
                          avatar={<Avatar src="random.png" />}
                          title={data.user_name}
                          description={
                            <p style={{ color: "#9834bb" }}>
                              <SafetyCertificateOutlined
                                style={{ color: "#9834bb" }}
                              />{" "}
                              {data.authority}
                            </p>
                          }
                        />
                      </div>

                      <div
                        className="reports-number"
                        style={{ marginTop: "10px" }}
                      >
                        <p className="instruction">Reports Reviewed</p>
                        <p className="card-number-data">
                          {data.reports_review}
                        </p>
                      </div>
                    </Card>
                  ))}
                </Row>
              </div>

              <div className="footer-button">
                <Button
                  className="Purple-button"
                  onClick={() => history.push("###")}
                >
                  Add a new Admin
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </MainPanel>
    </>
  );
};
export default Users;
