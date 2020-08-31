import React, { useState } from "react";
import { Card } from "antd";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

const BugGraph = props => {
  console.log("Tab clicked response ::", props.tabKey);

  // Graph-Data
  const [chart] = useState({
    bugs_found: {
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
    },
    valid_bugs: {
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
          data: [100, 200, 300, 600, 350]
        }
      ]
    },
    invalid_bugs: {
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
          data: [120, 700, 400, 800, 450]
        }
      ]
    },
    bugs_solved: {
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
          data: [100, 200, 500, 800, 350]
        }
      ]
    },
    bugs_unsolved: {
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
          data: [150, 400, 600, 200, 850]
        }
      ]
    }
  });

  return (
    <div className="graph-collection">
      <Card hoverable>
        <MDBContainer>
          {props.tabKey && props.tabKey === "bugs_found" ? (
            <Line data={chart.bugs_found} options={{ responsive: true }} />
          ) : null}
          {props.tabKey && props.tabKey === "valid_bugs" ? (
            <Line data={chart.valid_bugs} options={{ responsive: true }} />
          ) : null}
          {props.tabKey && props.tabKey === "invalid_bugs" ? (
            <Line data={chart.invalid_bugs} options={{ responsive: true }} />
          ) : null}
          {props.tabKey && props.tabKey === "bugs_solved" ? (
            <Line data={chart.bugs_solved} options={{ responsive: true }} />
          ) : null}
          {props.tabKey && props.tabKey === "bugs_unsolved" ? (
            <Line data={chart.bugs_unsolved} options={{ responsive: true }} />
          ) : null}
        </MDBContainer>
      </Card>
    </div>
  );
};
export default BugGraph;
