import React from "react";
import { useHistory } from "react-router-dom";

import { Input, Card, Avatar } from "antd";
import { Row, Button, Col } from "react-bootstrap";

const Programs = () => {
  const history = useHistory();

  const { Search } = Input;
  const { Meta } = Card;

  const cardData = [
    {
      title: "Program One",
      date: "21-03-2019",
      description:
        "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor",
      reward: "$100-$200"
    },
    {
      title: "Program One",
      date: "21-03-2019",
      description:
        "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor",
      reward: "$100-$200"
    },
    {
      title: "Program One",
      date: "21-03-2019",
      description:
        "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor",
      reward: "$100-$200"
    },
    {
      title: "Program One",
      date: "21-03-2019",
      description:
        "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor",
      reward: "$100-$200"
    }
  ];

  const handleCard = () => {
    console.log("clicked card item ::");
  };

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
                {cardData.map(data => (
                  <Card
                    style={{ width: 300, marginLeft: "2%", marginTop: "1%" }}
                    onClick={handleCard}
                  >
                    <div className="title-description">
                      <Meta
                        avatar={<Avatar src="random.png" />}
                        title={data.title}
                        description={data.date}
                      />
                      <Meta
                        style={{ marginTop: "10px", fontFamily: "Karla" }}
                        description={data.description}
                      />
                    </div>

                    <div
                      className="reward-levels"
                      style={{ marginTop: "10px" }}
                    >
                      <p className="instruction">Bounty Per Reward</p>
                      <p
                        style={{
                          fontFamily: "Karla",
                          fontWeight: "bold",
                          fontSize: "20px"
                        }}
                      >
                        {data.reward}
                      </p>
                    </div>
                  </Card>
                ))}
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
