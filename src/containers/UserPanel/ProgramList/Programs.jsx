import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Input, Card, Avatar } from "antd";
import { Row, Button, Col } from "react-bootstrap";
import { GetApi } from "../../../api/callapi";
import { AllProgramsLink, PointsFilterLink } from "../../../api/endpoints";
import MainPanel from "../MainPanel";
import { toast } from "react-toastify";
import moment from "moment";
import { CheckCircleFilled, BugFilled } from "@ant-design/icons";

const Programs = props => {
  const history = useHistory();

  const { Search } = Input;
  const { Meta } = Card;

  const user_check = localStorage.getItem("user_type" || "");

  const [urlBox, setUrlBox] = useState(AllProgramsLink);
  const [programList, setProgramList] = useState([]);

  useEffect(() => {
    init();
  }, [urlBox]);

  const init = async e => {
    const response = await GetApi(urlBox);

    if (response.status === 200) {
      let responseData = response.data.results;
      setProgramList(responseData);
    } else {
      toast.error("Sorry couldn't load programs now");
    }
  };

  console.log("Points filter response ::", programList);

  const handlePoints = () => {
    setUrlBox(PointsFilterLink);
  };

  const handleAllPrograms = () => {
    setUrlBox(AllProgramsLink);
  };

  const handleCard = id => {
    history.push(`/main_panel/programs/${id}`);
  };

  return (
    <>
      <MainPanel>
        <Row>
          <Col>
            <div className="programs-content">
              <div className="content-header">Available programs</div>
              <div className="filter-programs">
                <div className="button-group">
                  <Button
                    className="filter-buttons"
                    onClick={handleAllPrograms}
                  >
                    All programs
                  </Button>
                  <Button className="filter-buttons" onClick={handlePoints}>
                    Points
                  </Button>
                  <Button className="filter-buttons">Bounty</Button>
                </div>
                <div className="search-box" style={{ marginRight: "2%" }}>
                  <Search
                    placeholder="search"
                    onSearch={value => console.log(value)}
                  />
                </div>
              </div>

              <div className="card-list">
                <Row gutter={16}>
                  {programList.map((data, index) => (
                    <Card
                      hoverable
                      className="card-box"
                      onClick={() => handleCard(data && data.id)}
                      id={`program-${index}`}
                    >
                      <div className="title-description">
                        <Meta
                          avatar={<Avatar src={data && data.logo} />}
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
                        <Meta
                          style={{ marginTop: "10px", fontFamily: "Karla" }}
                          description={data && data.tag_line}
                        />
                      </div>

                      <div
                        className="reward-levels"
                        style={{ marginTop: "10px" }}
                      >
                        <p className="instruction">Bounty Per Reward</p>
                        <p className="card-number-data">
                          {data.point_only ? (
                            <p className="points">Points Only</p>
                          ) : (
                            <p className="reward">{data && data.bounty}</p>
                          )}
                        </p>
                      </div>
                    </Card>
                  ))}
                </Row>
              </div>

              {user_check === "Researcher" ? null : (
                <div className="footer-button">
                  <Link to="/main_panel/launch_program">
                    <Button className="Purple-button">
                      Launch a new Program
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </MainPanel>
    </>
  );
};
export default Programs;
