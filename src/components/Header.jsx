import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState(false);

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };
  return (
    <div>
      <header>
        <div className="header">
          <div className="menu" onClick={() => setMenu(!menu)}>
            <i className="fas fa-bars"></i>
          </div>
          <div className="logo">
            <Link to="/">
              <h2>
                power <i className="fas fa-times"></i>
              </h2>
            </Link>
          </div>
          <div>
            <ul style={styleMenu}>
              <li onClick={() => setMenu(!menu)}>
                <Link to="/">home</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link to="/classes">classes</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link to="/pricing">pricing</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link to="/contact">contact</Link>
              </li>
              <li className="menu cross" onClick={() => setMenu(!menu)}>
                <i className="fas fa-times-circle"></i>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
