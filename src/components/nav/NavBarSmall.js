import React, { useEffect, useState } from "react";
import logo from "./../../assets/logo.png";
import { withRouter, Link } from "react-router-dom";

export default function NavBarSmall(props) {
  let logoWidth = props.width / 5.5;
  console.log("logo width should be: " + logoWidth);
  let menu;
  if (props.disabled) {
    menu = (
      <div>
        <div className="navBarRowSticky  animated fadeOutUp ">
          <div className="navBar row animated fadeOutUp">
            <div className="col col-md-4">
              <ul className=" leftListSticky navbar-nav">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/portfolio">Portfolio</Link>
                </li>
              </ul>
            </div>
            <div className="col col-md-4">
              <img
                src={logo}
                style={{
                  width: logoWidth,
                  marginRight: "auto",
                  marginLeft: "auto"
                }}
                alt="Katie Kozma Photography"
                className="logo"
              />
            </div>
            <div className="col col-md-4">
              <ul className="rightListSticky">
                <li>
                  <Link to="/">Pricing</Link>
                </li>
                <li>
                  <Link to="/portfolio">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    menu = (
      <div>
        <div className="navBarRowSticky  animated fadeIn ">
          <div className="navBar row animated fadeInUp">
            <div className="col col-md-4">
              <ul className=" leftListSticky navbar-nav">
                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/portfolio">Portfolio</Link>
                </li>
              </ul>
            </div>
            <div className="col col-md-4">
              <img
                src={logo}
                style={{
                  width: logoWidth,
                  marginRight: "auto",
                  marginLeft: "auto"
                }}
                alt="Katie Kozma Photography"
                className="logo"
              />
            </div>
            <div className="col col-md-4">
              <ul className="rightListSticky">
                <li>
                  <Link to="/">Pricing</Link>
                </li>
                <li>
                  <Link to="/portfolio">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div>{menu}</div>;
}
