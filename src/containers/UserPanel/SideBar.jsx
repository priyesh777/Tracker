import React, { useState, useEffect } from "react";
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

  const [type, setType] = useState("");

  useEffect(() => {
    userTypeCheck();
  }, []);

  const userTypeCheck = () => {
    let localData = localStorage.getItem("user_type" || "");
    setType(localData);
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
            <NavLink to="/main_panel/main" className="side-menu-link">
              <span>
                <AppstoreOutlined className="side-menu-options" />
                <span>Dashboard</span>
              </span>
            </NavLink>
          </Menu.Item>

          {type === "Admin" && (
            <Menu.Item key="2">
              <NavLink to="/main_panel/researchers" className="side-menu-link">
                <span>
                  <UserOutlined className="side-menu-options" />
                  <span>Researchers</span>
                </span>
              </NavLink>
            </Menu.Item>
          )}

          <Menu.Item key="3">
            <NavLink to="/main_panel/submissions" className="side-menu-link">
              <span>
                <FileDoneOutlined className="side-menu-options" />
                <span>Submissions</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="/main_panel/rewards" className="side-menu-options">
              <span>
                <TrophyOutlined className="side-menu-options" />
                <span>Rewards</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="5">
            <NavLink to="/main_panel/programs" className="side-menu-options">
              <span>
                <ProjectOutlined className="side-menu-options" />
                <span>Programs</span>
              </span>
            </NavLink>
          </Menu.Item>

          {type === "Admin" && (
            <Menu.Item key="6">
              <NavLink to="/main_panel/users" className="side-menu-options">
                <span>
                  <IdcardOutlined className="side-menu-options" />
                  <span>Users</span>
                </span>
              </NavLink>
            </Menu.Item>
          )}

          <Menu.Item key="7" style={{ marginTop: "100px" }}>
            <NavLink to="/main_panel/settings" className="side-menu-options">
              <span>
                <ToolOutlined className="side-menu-options" />
                <span>Settings</span>
              </span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="8">
            <NavLink to="/main_panel/support" className="side-menu-options">
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
