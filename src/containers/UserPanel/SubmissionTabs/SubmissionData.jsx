import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Avatar, Tag } from "antd";
import { Row } from "react-bootstrap";
import moment from "moment";
import { CheckCircleFilled, BugFilled } from "@ant-design/icons";

const SubmissionData = props => {
  const { Meta } = Card;
  const history = useHistory();

  const cardData = props.submissionInfo;

  const handleCard = id => {
    history.push(`/main_panel/submissions/${id}`);
  };

  return (
    <>
      <div
        className="all-submissions"
        style={{ width: "100%", marginBottom: "20px" }}
      >
        <Row>
          {cardData.map((data, index) => (
            <Card
              hoverable
              className="card-box"
              onClick={() => handleCard(data && data.id)}
              actions={[
                <p className="reward">${data && data.reward}</p>,
                <p className="points">{data && data.points} Pts</p>
              ]}
              key={`submissions-${index}`}
            >
              <div className="title-description">
                <Meta
                  avatar={<Avatar src="random.png" />}
                  title={
                    <>
                      <span className="card-title">{data && data.title}</span>
                    </>
                  }
                  description={
                    <>
                      {/* <p className="company-name">Nassec</p> */}
                      <span>
                        <Tag color="green">New</Tag>
                        <span style={{ marginLeft: "10px" }}>
                          {data.to_nas ? (
                            <CheckCircleFilled style={{ color: "green" }} />
                          ) : (
                            <BugFilled style={{ color: "#ad77c0" }} />
                          )}
                        </span>
                      </span>
                    </>
                  }
                />
                <Meta
                  style={{ fontFamily: "Karla", marginTop: "10px" }}
                  description={
                    <>
                      <p style={{ marginBottom: "4%" }}>
                        Submitted On :{" "}
                        <strong>
                          {moment(data && data.created_at).format("YYYY-MM-DD")}
                        </strong>
                      </p>
                      <p style={{ marginBottom: "4%" }}>
                        Status :{" "}
                        <a
                          href="##"
                          style={{ fontWeight: "bold", color: "#ad77c0" }}
                        >
                          {data && data.status}
                        </a>
                      </p>
                      <p style={{ marginBottom: "4%" }}>
                        {data && data.comment_no} comments
                      </p>
                      <p style={{ marginBottom: "4%" }}>Rewards given :</p>
                    </>
                  }
                />
              </div>
            </Card>
          ))}
        </Row>
      </div>
    </>
  );
};
export default SubmissionData;
