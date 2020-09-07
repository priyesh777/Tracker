import React from "react";
import {
  AppstoreOutlined,
  UserOutlined,
  FileDoneOutlined,
  IdcardOutlined,
  TrophyOutlined,
  ProjectOutlined,
  ToolOutlined,
  QuestionCircleOutlined,
  CaretDownOutlined,
  FormOutlined
} from "@ant-design/icons";
import { Menu, Dropdown, Avatar } from "antd";
import { NavLink } from "react-router-dom";

const SideBar = props => {
  const handleProfileEdit = () => {
    console.log("handle profile edit clicked");
  };

  const menu = (
    <Menu onClick={handleProfileEdit}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        View profile
      </Menu.Item>
      <Menu.Item key="2" icon={<FormOutlined />}>
        Edit profile
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="side-menu-section">
      <div>
        <p className="Bugnas-text">BugNas</p>
      </div>
      <div className="profile-dropdown">
        <Dropdown overlay={menu}>
          <div className="user-name">
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
            <p className="dropdown-button" style={{ marginLeft: "10px" }}>
              Jane Doe
            </p>
            <CaretDownOutlined style={{ marginLeft: "20%", marginTop: "2%" }} />
          </div>
        </Dropdown>
      </div>
      <div className="menu-list">
        <Menu
          className="side-menu-options"
          mode="inline"
          // onClick={e => props.handleMenuClick(e)}
          // defaultSelectedKeys={["1"]}
        >
          <Menu.Item key="1">
            <NavLink to="/main_panel/main">
              <span>
                <AppstoreOutlined className="side-menu-options" />
                <span>Dashboard</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/main_panel/researchers">
              <span>
                <UserOutlined className="side-menu-options" />
                <span>Researchers</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/main_panel/submissions">
              <span>
                <FileDoneOutlined className="side-menu-options" />
                <span>Submissions</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/main_panel/rewards">
              <span>
                <TrophyOutlined className="side-menu-options" />
                <span>Rewards</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="5">
            <NavLink to="/main_panel/programs">
              <span>
                <ProjectOutlined className="side-menu-options" />
                <span>Programs</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="6">
            <NavLink to="/main_panel/users">
              <span>
                <IdcardOutlined className="side-menu-options" />
                <span>Users</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="7" style={{ marginTop: "100px" }}>
            <NavLink to="/main_panel/settings">
              <span>
                <ToolOutlined className="side-menu-options" />
                <span>Settings</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="8">
            <NavLink to="/main_panel/support">
              <span>
                <QuestionCircleOutlined className="side-menu-options" />
                <span>Support</span>
              </span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};
export default SideBar;
