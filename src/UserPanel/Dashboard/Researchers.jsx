import React from "react";
import { Card, List, Avatar } from "antd";

const Researchers = () => {
  const data = [
    {
      title: "Jannet Joe",
      id: "1",
      points: "1.4k"
    },
    {
      title: "Bruce Wayne",
      id: "2",
      points: "2.2k"
    },
    {
      title: "John Doe",
      id: "3",
      points: "1k"
    },
    {
      title: "Ramsey",
      id: "4",
      points: "1k"
    }
  ];

  return (
    <Card
      style={{
        border: "2px solid #E6E6E6",
        borderRadius: "8px",
        boxSizing: "border-box"
      }}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              style={{ marginLeft: "22px", marginBottom: "-35px" }}
              avatar={<Avatar src="##" />}
              title={
                <a href="https://ant.design" style={{ marginBottom: "-3px" }}>
                  {item.title}
                </a>
              }
              description={
                <p style={{ display: "flex" }}>
                  <p>#{item.id}</p>
                  <p style={{ marginLeft: "20px" }}>{item.points} pts</p>
                </p>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
};
export default Researchers;
