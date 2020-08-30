import React, { useState } from "react";
import { Card, Table, Avatar } from "antd";
import { Row, Col } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

const Rewards = () => {
  const [chart] = useState({
    dataLine: {
      labels: ["January", "February", "March", "April"],
      datasets: [
        {
          label: "Bounty Rewarded",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "#ad77c0",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [100, 700, 400, 800, 450]
        }
      ]
    }
  });

  //------Table data

  const columns = [
    {
      title: <text className="table-title"> Researchers</text>,
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
      title: <text className="table-title"> Rewarded For</text>,
      dataIndex: "rewarded",
      key: "rewarded",
      render: text => <p className="table-names">{text}</p>
    },
    {
      title: <text className="table-title"> Status</text>,
      dataIndex: "status",
      key: "status",
      render: text => <p className="table-names">{text}</p>
    },
    {
      title: <text className="table-title"> Amounts</text>,
      dataIndex: "amounts",
      key: "amounts",
      render: number => <p className="table-names">${number}</p>
    },
    {
      title: <text className="table-title"> Date rewarded</text>,
      dataIndex: "date",
      key: "date",
      render: text => <p className="table-names">{text}</p>
    }
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      rewarded: "Program Vulnerability",
      status: "Paid",
      amounts: 1299,
      date: "June 10, 2020"
    },
    {
      key: "2",
      name: "Jim kennedy",
      rewarded: "Program Vulnerability",
      status: "Paid",
      amounts: 1299,
      date: "June 10, 2020"
    },
    {
      key: "3",
      name: "Joe mckenly",
      rewarded: "Program Vulnerability",
      status: "Paid",
      amounts: 1299,
      date: "Jan 20, 2019"
    },
    {
      key: "4",
      name: "Jack Black",
      rewarded: "Program Vulnerability",
      status: "Paid",
      amounts: 1299,
      date: "Jan 20, 2019"
    },
    {
      key: "5",
      name: "Simmone Smith",
      rewarded: "Program Vulnerability",
      status: "Paid",
      amounts: 1299,
      date: "Jan 20, 2019"
    }
  ];
  //------------------------------

  return (
    <>
      <Col span={9}>
        <Row>
          <div className="rewards-overview">
            <div className="content-header">Overview</div>
            <div className="bounty">
              <Card hoverable className="reward" style={{ width: "70%" }}>
                <p className="instruction">Rewards</p>
                <p className="card-number-data">18</p>
              </Card>

              <Card
                hoverable
                className="highest-reward"
                style={{ width: "70%", marginLeft: "1%" }}
              >
                <p className="instruction">Highest reward</p>
                <p className="card-number-data">$14550</p>
              </Card>

              <Card
                hoverable
                className="average-reward"
                style={{ width: "70%", marginLeft: "1%" }}
              >
                <p className="instruction">Average Reward</p>
                <p className="card-number-data">$400</p>
              </Card>

              <Card
                hoverable
                className="total-reward"
                style={{ width: "70%", marginLeft: "1%" }}
              >
                <p className="instruction">Total Reward</p>
                <p className="card-number-data">$25330</p>
              </Card>
            </div>
          </div>
        </Row>
        <Row>
          <div className="graph-chart">
            <p className="content-header">Rewards</p>
            <Card hoverable style={{ width: "75%", marginTop: "2%" }}>
              <MDBContainer>
                <Line data={chart.dataLine} options={{ responsive: true }} />
              </MDBContainer>
            </Card>
          </div>
        </Row>
        <Row>
          <div className="rewards-history">
            <div className="content-header">Rewards History</div>
            <div className="table">
              <Table
                columns={columns}
                size="small"
                dataSource={data}
                bordered="true"
              />
            </div>
          </div>
        </Row>
      </Col>
    </>
  );
};
export default Rewards;
