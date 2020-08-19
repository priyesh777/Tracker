import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const SideBar = () => {
  return (
    <div className="bugnas-logo">
      <h3
        style={{
          color: "#000000",
          fontFamily: "Fugaz One",
          width: "108px",
          height: "44px",
          marginLeft: "39px",
          marginTop: "26px"
        }}
      >
        BugNas
      </h3>
      <div className="user-info" style={{ display: "flex" }}>
        <Avatar size="small" icon={<UserOutlined />} />
        <h4 style={{ marginLeft: "8px", fontFamily: "Karla" }}>Jane Doe</h4>
      </div>
    </div>
  );
};
export default SideBar;
