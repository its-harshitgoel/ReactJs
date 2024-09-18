import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("Name");
  const [text, setText] = useState("");
  const [check, setCheck] = useState(false);
  const [selected, setSelect] = useState("Mr");

  const handleCheck = (event) => {
    setCheck(event.target.checked);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSelect = (event) => {
    setSelect(event.target.value);
  };

  return (
    <div
      className="Form"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        margin: "0 auto",
        padding: "2rem",
        boxSizing: "border-box",
        backgroundColor: "#f9f9f9",
      }}
    >
      <input type="text" value={name} onChange={handleName}></input>
      <textarea value={text} onChange={handleText}></textarea>
      <input type="checkbox" checked={check} onChange={handleCheck}></input>
      <div>
        <select onChange={handleSelect} value={selected}>
          <option value="Mr">Mr</option>
          <option value="Ms">Ms</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
        </select>
      </div>
    </div>
  );
}

export default MyForm;
