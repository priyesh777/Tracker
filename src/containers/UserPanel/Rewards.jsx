import React, { useState, useEffect } from "react";
import { Card, Table, Avatar } from "antd";
import { Row, Col } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import MainPanel from "./MainPanel";
import { toast } from "react-toastify";
import { GetApi } from "../../api/callapi";
import { RewardStatLink, RewardTableLink } from "../../api/endpoints";
import moment from "moment";

const Rewards = () => {
  // Graph-Data
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

  const [rewardStat, setRewardStat] = useState({});
  const [rewardTable, setRewardTable] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async e => {
    const responseOne = await GetApi(RewardStatLink);
    const responseTwo = await GetApi(RewardTableLink);

    if (responseOne.status === 200 && responseTwo.status === 200) {
      let responseData = responseOne.data;
      let responseTable = responseTwo.data.results;
      setRewardStat(responseData);
      setRewardTable(responseTable);
    } else {
      toast.error("Sorry couldn't load rewards information");
    }
  };

  console.log("Reward table ::", rewardTable);

  //------Table data--------//
  const columns = [
    {
      title: <text className="table-title"> Researchers</text>,
      dataIndex: "researcher_name",
      key: "researcher_name",
      render: (name, row) => (
        <p className="table-names">
          <Avatar src={row.photo} style={{ marginRight: "5%" }} />
          {name}
        </p>
      )
    },
    {
      title: <text className="table-title"> Rewarded For</text>,
      dataIndex: "title",
      key: "title",
      render: text => <p className="table-names">{text.slice(0, 18)}..</p>
    },
    {
      title: <text className="table-title"> Status</text>,
      dataIndex: "paid",
      key: "paid",
      render: text => (
        <p className="table-names">{text ? <p>Paid</p> : <p> Not Paid</p>}</p>
      )
    },
    {
      title: <text className="table-title"> Amounts</text>,
      dataIndex: "reward",
      key: "reward",
      render: amount => <p className="table-names">${amount}</p>
    },
    {
      title: <text className="table-title"> Date rewarded</text>,
      dataIndex: "created_at",
      key: "created_at",
      render: date => (
        <p className="table-names">{moment(date).format("YYYY-MM-DD")}</p>
      )
    }
  ];
  //----------------------------------//

  return (
    <>
      <MainPanel>
        <Col span={9}>
          <Row>
            <div className="rewards-overview">
              <div className="content-header">Overview</div>
              <div className="bounty">
                <Card hoverable className="reward" style={{ width: "70%" }}>
                  <p className="instruction">Rewards</p>
                  <p className="card-number-data">${rewardStat.sum_reward}</p>
                </Card>

                <Card
                  hoverable
                  className="highest-reward"
                  style={{ width: "70%", marginLeft: "1%" }}
                >
                  <p className="instruction">Highest reward</p>
                  <p className="card-number-data">${rewardStat.max_reward}</p>
                </Card>

                <Card
                  hoverable
                  className="average-reward"
                  style={{ width: "70%", marginLeft: "1%" }}
                >
                  <p className="instruction">Average Reward</p>
                  <p className="card-number-data">${rewardStat.avg_reward}</p>
                </Card>

                <Card
                  hoverable
                  className="total-reward"
                  style={{ width: "70%", marginLeft: "1%" }}
                >
                  <p className="instruction">Total Reward</p>
                  <p className="card-number-data">${rewardStat.total_reward}</p>
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
                  dataSource={rewardTable}
                  bordered="true"
                  pagination={false}
                />
              </div>
            </div>
          </Row>
        </Col>
      </MainPanel>
    </>
  );
};
export default Rewards;
