import React from "react";
import { Row, Col, Card, Statistic } from "antd";

const Statistics = () => {
  return (
    <div className="site-statistic-demo-card" style={{ marginTop: "31px" }}>
      <h4 style={{ marginLeft: "31px" }}>Your Performance</h4>
      <Row
        gutter={8}
        style={{
          marginLeft: "10px",
          marginRight: "10px",
          justifyContent: "space-evenly"
        }}
      >
        <Col span={4} style={{ padding: "-4px" }}>
          <Card>
            <Statistic
              title="Bugs Submitted"
              value={18}
              valueStyle={{
                color: "#000000",
                fontFamily: "revert",
                fontSize: "30px",
                fontWeight: "bold"
              }}
            />
          </Card>
        </Col>
        <Col span={4}>
          <Card>
            <Statistic
              title="Invalid Bugs"
              value={12}
              valueStyle={{
                color: "#000000",
                fontFamily: "revert",
                fontSize: "30px",
                fontWeight: "bold"
              }}
            />
          </Card>
        </Col>
        <Col span={4}>
          <Card>
            <Statistic
              title="Bugs Solved"
              value={32}
              valueStyle={{
                color: "#3f8600",
                fontFamily: "revert",
                fontSize: "30px",
                fontWeight: "bold"
              }}
            />
          </Card>
        </Col>
        <Col span={4}>
          <Card>
            <Statistic
              title="Bugs Unsolved"
              value={122}
              valueStyle={{
                color: "#000000",
                fontFamily: "revert",
                fontSize: "30px",
                fontWeight: "bold"
              }}
            />
          </Card>
        </Col>
        <Col span={4}>
          <Card>
            <Statistic
              title="Bugs rewarded"
              value={54}
              valueStyle={{
                color: "#3f8600",
                fontFamily: "revert",
                fontSize: "30px",
                fontWeight: "bold"
              }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Statistics;
