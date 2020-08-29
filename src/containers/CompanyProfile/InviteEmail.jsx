import React from "react";
import { Input, Select } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const InviteEmail = () => {
  const { Option } = Select;

  const handleSelectAuthority = () => {
    console.log("selected an authority");
  };
  return (
    <div
      className="invite-row"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div className="email-box">
        <Input className="input-box" type="name" placeholder="Email Address" />
      </div>
      <div className="select-box">
        <Select
          className="select-authority"
          defaultValue="Admin"
          onChange={handleSelectAuthority}
          suffixIcon={<CaretDownOutlined />}
        >
          <Option value="admin" className="option">
            Admin
          </Option>
          <Option value="moderator" className="option">
            Moderator
          </Option>
        </Select>
      </div>
    </div>
  );
};
export default InviteEmail;
