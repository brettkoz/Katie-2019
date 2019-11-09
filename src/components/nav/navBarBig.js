import React from "react";
import { withRouter, Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import whiteLogo from "./../../assets/whiteLogo.png";
import "./../styles/animate.css";

export default function NavBarBig(props) {
  let logoWidth = props.width / 5.5;
  console.log("logo width should be: " + logoWidth);
  let menu;
  if (props.sticky) {
    menu = (
      <div>
        <div className="navBarRow animated fadeOutDown">
          <div className="navBar row">
            <div className="col col-md-4">
              <ul className=" leftList navbar-nav">
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
                src={whiteLogo}
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
              <ul className="rightList">
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
    if (props.animate) {
      menu = (
        <div>
          <div className="navBarRow animated fadeInUp">
            <div className="navBar row animated fadeInUp">
              <div className="col col-md-4">
                <ul className=" leftList navbar-nav">
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
                  src={whiteLogo}
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
                <ul className="rightList">
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
          <div className="navBarRow">
            <div className="navBar row">
              <div className="col col-md-4">
                <ul className=" leftList navbar-nav">
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
                  src={whiteLogo}
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
                <ul className="rightList">
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
  }
  return <div>{menu}</div>;
}
