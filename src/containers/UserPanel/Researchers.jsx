import React, { useState, useEffect } from "react";
import { Card, Avatar, Table } from "antd";
import { Row, Col } from "react-bootstrap";
import MainPanel from "./MainPanel";
import { GetApi } from "../../api/callapi";
import { ResearchersLink, AllProgramsLink } from "../../api/endpoints";
import { toast } from "react-toastify";
import { CheckCircleFilled, BugFilled } from "@ant-design/icons";
import moment from "moment";

const Researchers = () => {
  const { Meta } = Card;

  const [Researcher, setResearcher] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async e => {
    const response = await GetApi(ResearchersLink);
    const responseTwo = await GetApi(AllProgramsLink);

    if (response.status === 200) {
      let responseData = response.data.results;
      let responseCard = responseTwo.data.results;

      setResearcher(responseData);
      setCardInfo(responseCard);
    } else {
      toast.error("Sorry couldn't load programs now");
    }
  };

  console.log("Researcher local state from API ::", Researcher);

  const columns = [
    {
      title: <span className="table-title">Rank</span>,
      dataIndex: "rank",
      key: "rank",
      render: number => <p className="table-names"> number</p>
    },
    {
      title: <span className="table-title"> Researcher</span>,
      dataIndex: "username",
      render: (text, row) => (
        <p className="table-names">
          <Avatar src={row.photo} style={{ marginRight: "20px" }} />
          {text}
        </p>
      )
    },
    {
      title: <span className="table-title"> Points</span>,
      dataIndex: "points",
      key: "points",
      render: number => <p className="table-names">{number} Pts</p>
    }
  ];

  return (
    <>
      <MainPanel>
        <Row>
          <Col>
            <div className="researchers">
              <div className="content-header">Top Researchers</div>

              <div className="card-list">
                <Row gutter={16}>
                  {cardInfo.map(data => (
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
                      </div>
                    </Card>
                  ))}
                </Row>
              </div>

              <div className="range-table">
                <div className="content-header">Latest Report</div>
                <div className="table">
                  <Table
                    columns={columns}
                    size="small"
                    dataSource={Researcher}
                    bordered="true"
                    pagination={false}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </MainPanel>
    </>
  );
};
export default Researchers;
