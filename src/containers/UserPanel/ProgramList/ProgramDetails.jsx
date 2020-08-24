import React, { useState } from "react";
import thumbnail from "../../../images/pic_upload.png";
import { Button, Card, Input } from "antd";
import { Row, Col, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import BackArrow from "../../../images/arrow-left.svg";

const ProgramDetails = () => {
  const history = useHistory();

  const { Meta } = Card;

  const TableData = [
    { name: "Active", type: "website" },
    { name: "Radio", type: "website" },
    { name: "Radio", type: "other" }
  ];

  const [programData, setProgramData] = useState({
    title: "Program one",
    description:
      "Facilis unde sit nam ut labore et maiores eum. Dolorem quisquam atque",
    details:
      "ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem i",
    rules:
      " ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
  });

  const handleCard = () => {
    console.log("clicke me ::::");
  };

  return (
    <>
      <Row>
        <Col lg={8}>
          <div className="back-button">
            <Button
              className="user-back-button"
              onClick={() => {
                history.push("###back to programList");
              }}
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
                  title={<p className="card-title">{programData.title}</p>}
                  description={
                    <>
                      <p>{programData.description}</p>
                      <Button className="edit-button" onClick={handleCard}>
                        Edit Program
                      </Button>
                    </>
                  }
                />
              </div>
            </Card>
          </div>

          <div className="program-details-card">
            <Card hoverable>
              <div className="title-description">
                <Meta
                  title={<p className="card-title">Program Details</p>}
                  description={
                    <>
                      <p>
                        ed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem i ed ut perspiciatis unde
                        omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                      </p>
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
                        type="number"
                        placeholder="Min"
                        style={{
                          background: "#f3f3f3",
                          border: " 2px solid #c4c4c4",
                          borderRadius: "5px",
                          marginRight: "10px",
                          width: "150px"
                        }}
                      />
                      <Input
                        type="number"
                        placeholder="Max"
                        style={{
                          background: "#f3f3f3",
                          border: " 2px solid #c4c4c4",
                          borderRadius: "5px",
                          marginRight: "10px",
                          width: "150px"
                        }}
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
                        type="number"
                        placeholder="Min"
                        style={{
                          background: "#f3f3f3",
                          border: " 2px solid #c4c4c4",
                          borderRadius: "5px",
                          marginRight: "10px",
                          width: "150px"
                        }}
                      />
                      <Input
                        type="number"
                        placeholder="Max"
                        style={{
                          background: "#f3f3f3",
                          border: " 2px solid #c4c4c4",
                          borderRadius: "5px",
                          marginRight: "10px",
                          width: "150px"
                        }}
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
                        type="number"
                        placeholder="Min"
                        style={{
                          background: "#f3f3f3",
                          border: " 2px solid #c4c4c4",
                          borderRadius: "5px",
                          marginRight: "10px",
                          width: "150px"
                        }}
                      />
                      <Input
                        type="number"
                        placeholder="Max"
                        style={{
                          background: "#f3f3f3",
                          border: " 2px solid #c4c4c4",
                          borderRadius: "5px",
                          marginRight: "10px",
                          width: "150px"
                        }}
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
                        type="number"
                        placeholder="Min"
                        style={{
                          background: "#f3f3f3",
                          border: " 2px solid #c4c4c4",
                          borderRadius: "5px",
                          marginRight: "10px",
                          width: "150px"
                        }}
                      />
                      <Input
                        type="number"
                        placeholder="Max"
                        style={{
                          background: "#f3f3f3",
                          border: " 2px solid #c4c4c4",
                          borderRadius: "5px",
                          marginRight: "10px",
                          width: "150px"
                        }}
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
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem i ed ut perspiciatis unde
                        omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo. Nemo enim ipsam
                      </p>
                    </>
                  }
                />
              </div>
            </Card>
          </div>
        </Col>
        <Col lg={4}>
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
    </>
  );
};
export default ProgramDetails;
