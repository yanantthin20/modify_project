import React from "react";
import { Link } from "react-router-dom";
const DropDownSubMenu = () => {
  return (
    <div id="leftMenu">
      <details>
        <summary>Categories</summary>
        <Link to="/">Injection </Link>
        <Link to="/oral">Oral</Link>
      </details>
    </div>
  );
};

export default DropDownSubMenu;
