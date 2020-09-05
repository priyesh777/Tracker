import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";

import { Input, Card, Avatar } from "antd";
import { Row, Button, Col } from "react-bootstrap";
import {GetApi} from '../../../api/callapi'
import {AllProgramsLink} from '../../../api/endpoints'

const Programs = props => {
  const history = useHistory();

  const { Search } = Input;
  const { Meta } = Card;

  // const cardData = [
  //   {
  //     title: "Program One",
  //     date: "21-03-2019",
  //     description:
  //       "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor",
  //     reward: "$100-$200",
  //     id: "2001"
  //   },
  //   {
  //     title: "Program Two",
  //     date: "21-03-2019",
  //     description:
  //       "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor",
  //     reward: "$100-$200",
  //     id: "2002"
  //   },
  //   {
  //     title: "Program Three",
  //     date: "21-03-2019",
  //     description:
  //       "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor",
  //     reward: "$100-$200",
  //     id: "2003"
  //   },
  //   {
  //     title: "Program four",
  //     date: "21-03-2019",
  //     description:
  //       "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor",
  //     reward: "$100-$200",
  //     id: "2004"
  //   }
  // ];
  const [page, setPage] = useState(AllProgramsLink)
  const [cardData, setPrograms] = useState(
    [
      {
        title: "Program One",
        date: "21-03-2019",
        description:
          "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor",
        reward: "$100-$200",
        id: "2001"
      },
      {
        title: "Program Two",
        date: "21-03-2019",
        description:
          "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor",
        reward: "$100-$200",
        id: "2002"
      },
      {
        title: "Program Three",
        date: "21-03-2019",
        description:
          "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor",
        reward: "$100-$200",
        id: "2003"
      },
      {
        title: "Program four",
        date: "21-03-2019",
        description:
          "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor",
        reward: "$100-$200",
        id: "2004"
      }
    ]
  )
  
  useEffect(() => {
    console.log("Getting..")
    async function init() {
        const response = await GetApi(page)
        console.log(response)
        if (response.status === 200) {
          setPrograms(response.data.results) 
          // setPage(response.data.next)
        }
        else {
            alert("fetch error!!")
        }

    }
    init()
}, [page]);


  // const handleCard = e => {
  //   console.log("clicked card item ::", e);
  // };

  return (
    <>
      <Row>
        <Col>
          <div className="programs-content">
            <div className="content-header">Available programs</div>
            <div className="filter-programs">
              <div className="button-group">
                <Button className="filter-buttons">Points</Button>
                <Button className="filter-buttons">Rewards</Button>
                <Button className="filter-buttons">Bounty</Button>
              </div>
              <div className="search-box" style={{ marginRight: "2%" }}>
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
                    hoverable
                    className="card-box"
                    onClick={props.handleOpenCard}
                  >
                    <div className="title-description">
                      <Meta
                        avatar={<Avatar src={data.logo} />}
                        title={data.name}
                        description={data.created_at}
                      />
                      <Meta
                        style={{ marginTop: "10px", fontFamily: "Karla" }}
                        description={data.tag_line}
                      />
                    </div>

                    <div
                      className="reward-levels"
                      style={{ marginTop: "10px" }}
                    >
                      <p className="instruction">Bounty Per Reward</p>
                      <p className="card-number-data">{data.bounty}</p>
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
