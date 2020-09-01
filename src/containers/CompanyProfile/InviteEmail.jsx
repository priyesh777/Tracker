import React from "react";
import { Input, Select } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const InviteEmail = props => {
  const { Option } = Select;

  // const handleSelectAuthority = () => {
  //   console.log("selected an authority");
  // };
  console.log("input state values ::", props.inputList);
  return (
    <>
      {props.inputList &&
        props.inputList.map((data, i) => {
          return (
            <>
              <div
                className="invite-row"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div
                  className="email-box"
                  style={{ marginLeft: "8%", width: "50%" }}
                >
                  <Input
                    className="input-box"
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={data && data.email}
                    onChange={e => props.onChangeEmail(e, i)}
                  />
                </div>
                <div className="select-box" style={{ marginRight: "5%" }}>
                  <Select
                    className="select-authority"
                    defaultValue="Admin"
                    name="role"
                    value={data && data.role}
                    onChange={e => props.onChangeEmail(e, i)}
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
            </>
          );
        })}
    </>
  );
};
export default InviteEmail;
