import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Input, Card, Avatar } from "antd";
import { Row, Button, Col } from "react-bootstrap";
import { GetApi } from "../../../api/callapi";
import { AllProgramsLink } from "../../../api/endpoints";
import MainPanel from "../MainPanel";
import { toast } from "react-toastify";
import moment from "moment";

const Programs = props => {
  const history = useHistory();

  const { Search } = Input;
  const { Meta } = Card;

  const [programList, setProgramList] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = async e => {
    const response = await GetApi(AllProgramsLink);

    if (response.status === 200) {
      let responseData = response.data.results;
      setProgramList(responseData);
    } else {
      toast.error("Sorry couldn't load programs now");
    }
  };
  console.log("programs local state ::", programList);

  // const handleCard = e => {
  //   console.log("clicked card item ::", e);
  // };

  return (
    <>
      <MainPanel>
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
                  {programList.map((data, index) => (
                    <Card
                      hoverable
                      className="card-box"
                      onClick={props.handleOpenCard}
                      id={`program-${index}`}
                    >
                      <div className="title-description">
                        <Meta
                          avatar={<Avatar src={data.logo} />}
                          title={data.name}
                          description={moment(data.created_at).format(
                            "YYYY-MM-DD"
                          )}
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
      </MainPanel>
    </>
  );
};
export default Programs;
