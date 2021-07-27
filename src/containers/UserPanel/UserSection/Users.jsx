import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card, Avatar } from "antd";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import { Row, Button, Col } from "react-bootstrap";
import MainPanel from "../MainPanel";
import { GetApi } from "../../../api/callapi";
import { UsersLink } from "../../../api/endpoints";
import { toast } from "react-toastify";

const Users = () => {
  const history = useHistory();

  const { Meta } = Card;

  const [User, setUser] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async e => {
    const response = await GetApi(UsersLink);

    if (response.status === 200) {
      let responseData = response.data.results;
      setUser(responseData);
    } else {
      toast.error("Sorry couldn't load programs now");
    }
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
                  {User.map((data, index) => (
                    <Card
                      hoverable
                      className="card-box"
                      key={`userCard-${index}`}
                    >
                      <div className="title-description">
                        <Meta
                          avatar={<Avatar src={data.photo} />}
                          title={
                            <span>
                              {data.first_name} {data.last_name}
                            </span>
                          }
                          description={
                            <p style={{ color: "#9834bb" }}>
                              <SafetyCertificateOutlined
                                style={{ color: "#9834bb" }}
                              />{" "}
                              {data.type}
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
                          {data.resolved_report}
                        </p>
                      </div>
                    </Card>
                  ))}
                </Row>
              </div>

              <div className="footer-button">
                <Button
                  className="Purple-button"
                  onClick={() => history.push("/main_panel/new_admin")}
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
