import React from "react";
import { Input, Card } from "antd";
import { Row, Button, Col } from "react-bootstrap";

const Programs = () => {
  const { Search } = Input;
  return (
    <>
      <div className="container">
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
              <Row>
                <Card></Card>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Programs;
