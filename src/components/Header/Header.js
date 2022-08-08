import React from "react";
import "./Header.css";
function Header() {
  return (
    // whenever we click on the header it will take us to the top of the page
    <span className="header" onClick={() => window.scroll(0, 0)}>
      Movie Hub
    </span>
  );
}

export default Header;
