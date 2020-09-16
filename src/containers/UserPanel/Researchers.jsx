import React, { useState, useEffect } from "react";
import { Card, Avatar, Table } from "antd";
import { Row, Col } from "react-bootstrap";
import MainPanel from "./MainPanel";
import { GetApi } from "../../api/callapi";
import { ResearchersLink } from "../../api/endpoints";
import { toast } from "react-toastify";

const Researchers = () => {
  const { Meta } = Card;

  const cardData = [
    {
      researcher: "John Doe",
      location: "lalitpur"
    },
    {
      researcher: "Maggie Doyne",
      location: "kathmandu"
    },
    {
      researcher: "James Doyne",
      location: "Bhaktapur"
    }
  ];

  const [Researcher, setResearcher] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async e => {
    const response = await GetApi(ResearchersLink);

    if (response.status === 200) {
      let responseData = response.data.results;
      setResearcher(responseData);
    } else {
      toast.error("Sorry couldn't load programs now");
    }
  };

  console.log("Researcher local state from API ::", Researcher);

  const columns = [
    {
      title: <span className="table-title">Rank</span>,
      dataIndex: "id",
      key: "id",
      render: number => <p className="table-names">{number}</p>
    },
    {
      title: <span className="table-title"> Researcher</span>,
      dataIndex: "username",
      key: "username",
      render: text => (
        <p className="table-names">
          <Avatar src="random.png" style={{ marginRight: "5%" }} />
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
                          description={<p>{data.location}</p>}
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
