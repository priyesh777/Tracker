import React from "react";
import { Link, useHistory } from "react-router-dom";

import { Input, Card, Avatar } from "antd";
import { Row, Button, Col } from "react-bootstrap";

const Programs = () => {
  const history = useHistory();

  const { Search } = Input;
  const { Meta } = Card;

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
              <div className="search-box" style={{ marginRight: "20%" }}>
                <Search
                  placeholder="search"
                  onSearch={value => console.log(value)}
                />
              </div>
            </div>

            <div className="card-list">
              <Row gutter={16}>
                <Card style={{ width: 300, marginLeft: "2%" }}>
                  <div className="title-description">
                    <Meta
                      avatar={<Avatar src="random.png" />}
                      title="Program Name"
                      description="21 March 2019  4:42PM"
                    />
                    <Meta
                      style={{ marginTop: "10px", fontFamily: "Karla" }}
                      description="Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor"
                    />
                  </div>

                  <div className="reward-levels" style={{ marginTop: "10px" }}>
                    <p className="instruction">Bounty Per Reward</p>
                    <p
                      style={{
                        fontFamily: "Karla",
                        fontWeight: "bold",
                        fontSize: "20px"
                      }}
                    >
                      $100 - $200
                    </p>
                  </div>
                </Card>
              </Row>
            </div>

            <div className="footer-button">
              <Button
                className="Purple-button"
                onClick={() => history.push("/program_details")}
              >
                Launch a new Program
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default Programs;
