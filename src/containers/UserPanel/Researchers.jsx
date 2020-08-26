import React from "react";
import { Card, Avatar, Table } from "antd";
import { Row, Col } from "react-bootstrap";

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
    }
  ];

  const columns = [
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank"
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: text => <p>{text}</p>
    },
    {
      title: "Points",
      dataIndex: "points",
      key: "points"
    }
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      rank: 32,
      points: 10
    },
    {
      key: "2",
      name: "Jim Green",
      rank: 42,
      points: 12
    },
    {
      key: "3",
      name: "Joe Black",
      rank: 32,
      points: 15
    }
  ];

  return (
    <>
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
              <div className="table" style={{ marginTop: "2%" }}>
                <Table columns={columns} dataSource={data} bordered="true" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Researchers;
