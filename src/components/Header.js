import React from "react";
import logo from "../logo.svg";
import Para from "./Para";

function Header({ name, num, myObj, myArr, myFunc }) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Hello, {name}</h1>
      <h5>{num}</h5>
      {JSON.stringify(myObj)}
      {myArr[0]}
      <br></br>
      {myFunc(51, 6)}
      <Para />
    </header>
  );
}

export default Header;
