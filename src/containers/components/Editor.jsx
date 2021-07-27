import React, { useState } from "react";
import * as ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = props => {
  const { onChange, name, id, value } = props;

  const [myValue, setMyValue] = useState(value);

  const onEditorChange = text => {
    setMyValue(text);

    let event = {
      target: {
        id: id,
        name: name,
        value: text
      }
    };
    onChange(event);
  };

  return (
    <>
      <ReactQuill defaultValue={myValue} onChange={onEditorChange} />
    </>
  );
};
export default Editor;
