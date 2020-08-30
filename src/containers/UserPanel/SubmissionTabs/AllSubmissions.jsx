import React from "react";
import { Card, Avatar, Tag } from "antd";
import { Row } from "react-bootstrap";

const AllSubmissions = props => {
  const { Meta } = Card;

  const cardData = [
    {
      title: "Program One",
      company_name: "Nassec",
      description:
        "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor",
      submitted: "21-4-2019",
      status: "being evaluated",
      comments: "10 comments"
    },
    {
      title: "Program Two",
      company_name: "Nassec",
      description:
        "Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor",
      submitted: "21-4-2019",
      status: "Approved",
      comments: "20 comments"
    }
  ];

  return (
    <>
      <div className="all-submissions" style={{ width: "100%" }}>
        <Row>
          {cardData.map(data => (
            <Card
              hoverable
              className="card-box"
              onClick={props.openSubmission}
              actions={[
                <p className="reward">$23</p>,
                <p className="points">10 Pts</p>
              ]}
            >
              <div className="title-description">
                <Meta
                  avatar={<Avatar src="random.png" />}
                  title={<p className="card-title">{data.title}</p>}
                  description={
                    <>
                      <p className="company-name">{data.company_name}</p>
                      <p style={{ marginBottom: "4%" }}>
                        <Tag color="green">New</Tag>
                      </p>
                    </>
                  }
                />
                <Meta
                  style={{ fontFamily: "Karla" }}
                  description={
                    <>
                      <p style={{ marginBottom: "4%" }}>
                        Submitted On : <strong>{data.submitted}</strong>
                      </p>
                      <p style={{ marginBottom: "4%" }}>
                        Status :{" "}
                        <a
                          href="##"
                          style={{ fontWeight: "bold", color: "#ad77c0" }}
                        >
                          {data.status}
                        </a>
                      </p>
                      <p style={{ marginBottom: "4%" }}>{data.comments}</p>
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
export default AllSubmissions;
