import React from "react";
import { Card, Avatar, Table } from "antd";
import { Row, Col } from "react-bootstrap";
import MainPanel from "./MainPanel";

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

  const columns = [
    {
      title: <text className="table-title"> Rank</text>,
      dataIndex: "rank",
      key: "rank",
      render: number => <p className="table-names">{number}</p>
    },
    {
      title: <text className="table-title"> Researcher</text>,
      dataIndex: "name",
      key: "name",
      render: text => (
        <p className="table-names">
          <Avatar src="random.png" style={{ marginRight: "5%" }} />
          {text}
        </p>
      )
    },
    {
      title: <text className="table-title"> Points</text>,
      dataIndex: "points",
      key: "points",
      render: number => <p className="table-names">{number} Pts</p>
    }
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      rank: 1,
      points: 10
    },
    {
      key: "2",
      name: "Jim kennedy",
      rank: 2,
      points: 12
    },
    {
      key: "3",
      name: "Joe mckenly",
      rank: 3,
      points: 15
    },
    {
      key: "4",
      name: "Jack Black",
      rank: 4,
      points: 40
    },
    {
      key: "5",
      name: "Simmone Smith",
      rank: 5,
      points: 50
    }
  ];
  console.log("reached researchers");
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
                    dataSource={data}
                    bordered="true"
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
