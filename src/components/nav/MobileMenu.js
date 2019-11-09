import React from "react";
import { withRouter, Link } from "react-router-dom";

export default function MobileMenu(props) {
  return (
    <div className="fullMobileMenu animated slideInRight">
      <a
        className="exit"
        onClick={() => {
          props.close();
        }}
      >
        Close
      </a>
      <ul className="navbar-nav centeredMenu">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/portfolio">Portfolio</Link>
          <ul className="">
            <li className="nav-item">
              <Link to="/portfolio/wedding">Weddings</Link>
            </li>
            <li className="nav-item">
              <Link to="portfolio/couples">Couples</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio/nature">Nature</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
