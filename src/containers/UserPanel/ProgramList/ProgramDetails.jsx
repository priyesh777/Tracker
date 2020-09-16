import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import thumbnail from "../../../images/pic_upload.png";
import { Button, Card, Input } from "antd";
import { Row, Col, Table } from "react-bootstrap";
import BackArrow from "../../../images/arrow-left.svg";
import MainPanel from "../MainPanel";
import { GetApi } from "../../../api/callapi";
import { ProgramDetailLink } from "../../../api/endpoints";
import { toast } from "react-toastify";

const ProgramDetails = props => {
  const { Meta } = Card;
  const history = useHistory();

  const TableData = [
    { name: "Active", type: "website" },
    { name: "Radio", type: "website" },
    { name: "Radio", type: "other" }
  ];

  const [programDetail, setProgramDetail] = useState({});

  const cardId = props.match.params.id;

  const url = ProgramDetailLink + cardId;

  useEffect(() => {
    init();
  }, []);

  const init = async e => {
    const response = await GetApi(url);
    if (response.status === 200) {
      let responseData = response.data;
      setProgramDetail(responseData);
    } else {
      toast.error("Sorry couldn't load Program-details right now");
    }
  };

  const handleEditProgram = () => {
    console.log("handle Edit program  ::::");
  };

  return (
    <>
      <MainPanel>
        <Row>
          <Col lg={6}>
            <div className="back-button">
              <Button
                className="user-back-button"
                onClick={() => history.push("/main_panel/programs")}
              >
                <img src={BackArrow} alt="back-arrow-left" /> Back
              </Button>
            </div>
            <div className="program-name-card">
              <Card hoverable>
                <div className="title-description">
                  <Meta
                    avatar={
                      <img
                        src={thumbnail}
                        alt="program-thumbnail"
                        style={{ height: "120px" }}
                      />
                    }
                    title={<p className="card-title">{programDetail.name}</p>}
                    description={
                      <>
                        <p>{programDetail.tag_line}</p>
                        <Button
                          className="edit-button"
                          onClick={handleEditProgram}
                        >
                          Edit Program
                        </Button>
                      </>
                    }
                  />
                </div>
              </Card>
            </div>

            <div className="details-card">
              <div className="program-details-card">
                <Card hoverable>
                  <div className="title-description">
                    <Meta
                      title={<p className="card-title">Program Details</p>}
                      description={
                        <>
                          <p>{programDetail.description}</p>
                        </>
                      }
                    />
                  </div>
                </Card>
              </div>

              <div className="range-table">
                <p className="table-head">Reward Range</p>
                <Table className="strip-table" striped hover>
                  <thead>
                    <tr>
                      <th className="table-header">Technical Severity</th>
                      <th
                        className="table-header"
                        style={{
                          width: "380px"
                        }}
                      >
                        Reward Range
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="table-topic">Critical</td>
                      <td>
                        <div
                          className="reward-amt"
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly"
                          }}
                        >
                          <Input
                            className="reward-input"
                            type="number"
                            placeholder="Min"
                            disabled
                          />
                          <Input
                            className="reward-input"
                            type="number"
                            placeholder="Max"
                            disabled
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-topic">High</td>
                      <td>
                        <div
                          className="reward-amt"
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly"
                          }}
                        >
                          <Input
                            className="reward-input"
                            type="number"
                            placeholder="Min"
                            disabled
                          />
                          <Input
                            className="reward-input"
                            type="number"
                            placeholder="Max"
                            disabled
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-topic">Medium</td>
                      <td>
                        <div
                          className="reward-amt"
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly"
                          }}
                        >
                          <Input
                            className="reward-input"
                            type="number"
                            placeholder="Min"
                            disabled
                          />
                          <Input
                            className="reward-input"
                            type="number"
                            placeholder="Max"
                            disabled
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-topic">Low</td>
                      <td>
                        <div
                          className="reward-amt"
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly"
                          }}
                        >
                          <Input
                            className="reward-input"
                            type="number"
                            placeholder="Min"
                            disabled
                          />
                          <Input
                            className="reward-input"
                            type="number"
                            placeholder="Max"
                            disabled
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <div className="range-table">
                <p className="table-head">In-Scope</p>
                <Table className="strip-table" striped hover>
                  <thead>
                    <tr>
                      <th
                        style={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontFamily: "Karla",
                          fontWeight: "bold",
                          width: "360px"
                        }}
                      >
                        Target Name
                      </th>
                      <th
                        style={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontFamily: "Karla",
                          fontWeight: "bold"
                        }}
                      >
                        Target Type
                      </th>
                    </tr>
                  </thead>
                  {TableData.map(data => (
                    <tbody>
                      <tr>
                        <td style={{ fontFamily: "Karla" }}>{data.name}</td>
                        <td style={{ fontFamily: "Karla" }}>{data.type}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </div>

              <div className="range-table">
                <p className="table-head">Out-Scope</p>
                <Table className="strip-table" striped hover>
                  <thead>
                    <tr>
                      <th
                        style={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontFamily: "Karla",
                          fontWeight: "bold",
                          width: "360px"
                        }}
                      >
                        Target Name
                      </th>
                      <th
                        style={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontFamily: "Karla",
                          fontWeight: "bold"
                        }}
                      >
                        Target Type
                      </th>
                    </tr>
                  </thead>
                  {TableData.map(data => (
                    <tbody>
                      <tr>
                        <td style={{ fontFamily: "Karla" }}>{data.name}</td>
                        <td style={{ fontFamily: "Karla" }}>{data.type}</td>
                      </tr>
                    </tbody>
                  ))}
                </Table>
              </div>

              <div className="program-details-card">
                <Card hoverable>
                  <div className="title-description">
                    <Meta
                      title={<p className="card-title">Program Rules</p>}
                      description={
                        <>
                          <p>
                            ed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                          </p>
                        </>
                      }
                    />
                  </div>
                </Card>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="reward-range">
              <div className="content-header">Reward range vulnerability</div>
              <div className="bounty">
                <Card hoverable>
                  <p className="instruction">Bounty</p>
                  <p className="card-number-data">$25 - $100</p>
                </Card>
              </div>
              <div className="bounty">
                <Card hoverable>
                  <p className="instruction">Points</p>
                  <p className="card-number-data">1 - 200</p>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </MainPanel>
    </>
  );
};
export default ProgramDetails;
