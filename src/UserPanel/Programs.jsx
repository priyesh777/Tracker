import React from "react";
import { Input, Card } from "antd";
import { Row, Button, Col } from "react-bootstrap";

const Programs = () => {
  const { Search } = Input;
  return (
    <>
      <Row>
        <Col>
          <div className="programs-content">
            <div className="header">Available programs</div>
            <div className="filter-programs">
              <div className="button-group">
                <Button className="filter-buttons">Points</Button>
                <Button className="filter-buttons">Rewards</Button>
                <Button className="filter-buttons">Bounty</Button>
              </div>
              <div className="search-box">
                <Search
                  placeholder="search"
                  onSearch={value => console.log(value)}
                />
              </div>
            </div>
          </div>
          <div className="card-list">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>
                  Card content
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Programs;
