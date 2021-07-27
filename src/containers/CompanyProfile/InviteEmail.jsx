import React from "react";
import { Input } from "antd";

const InviteEmail = props => {
  const onDataChange = (e, i) => {
    const { name, value } = e.target;
    const list = [...props.inputList];
    list[i][name] = value;
    props.onInputChange(list);
  };

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
                    onChange={e => onDataChange(e, i)}
                  />
                </div>
                <div className="select-box" style={{ marginRight: "5%" }}>
                  <select
                    className="select-authority"
                    name="type"
                    value={data && data.role}
                    onChange={e => onDataChange(e, i)}
                  >
                    <option value="">-- Select Role --</option>
                    <option value="admin" className="option">
                      Admin
                    </option>
                    <option value="moderator" className="option">
                      Moderator
                    </option>
                  </select>
                </div>
              </div>
            </>
          );
        })}
    </>
  );
};
export default InviteEmail;
