import React from "react";
import logo from "../Assets/budget-icon.png";

export default function Header() {
  return (
    <header>
      <div className="header__container">
        <img alt="budgeting logo" src={logo} />
        <h2>Track It</h2> 
      </div>
    </header>
  );
}
