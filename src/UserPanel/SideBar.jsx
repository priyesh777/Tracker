import React from "react";
import {
  AppstoreOutlined,
  UserOutlined,
  FileDoneOutlined,
  IdcardOutlined,
  TrophyOutlined,
  ProjectOutlined,
  ToolOutlined,
  QuestionCircleOutlined
} from "@ant-design/icons";
import { Menu } from "antd";

const SideBar = props => {
  return (
    <div className="side-menu-section">
      <div>
        <p className="Bugnas-text">BugNas</p>
      </div>
      <Menu
        className="side-menu-options"
        onClick={e => props.handleMenuClick(e)}
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
        <Menu.Item key="1">
          <span>
            <AppstoreOutlined className="side-menu-options" />
            <span>Dashboard</span>
          </span>
        </Menu.Item>
        <Menu.Item key="2">
          <span>
            <UserOutlined className="side-menu-options" />
            <span>Researchers</span>
          </span>
        </Menu.Item>
        <Menu.Item key="3">
          <span>
            <FileDoneOutlined className="side-menu-options" />
            <span>Submissions</span>
          </span>
        </Menu.Item>
        <Menu.Item key="4">
          <span>
            <TrophyOutlined className="side-menu-options" />
            <span>Rewards</span>
          </span>
        </Menu.Item>
        <Menu.Item key="5">
          <span>
            <ProjectOutlined className="side-menu-options" />
            <span>Programs</span>
          </span>
        </Menu.Item>
        <Menu.Item key="6">
          <span>
            <IdcardOutlined className="side-menu-options" />
            <span>Users</span>
          </span>
        </Menu.Item>
        <Menu.Item key="7" style={{ marginTop: "100px" }}>
          <span>
            <ToolOutlined className="side-menu-options" />
            <span>Settings</span>
          </span>
        </Menu.Item>
        <Menu.Item key="8">
          <span>
            <QuestionCircleOutlined className="side-menu-options" />
            <span>Support</span>
          </span>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default SideBar;
