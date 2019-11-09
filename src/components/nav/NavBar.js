import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import whiteLogo from "./../../assets/whiteLogo.png";
import "./navbar.css";
import Plx from "react-plx";
import MobileMenu from "./MobileMenu";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      sticky: this.props.sticky,
      linkStyles: {
        color: "#fff",
        fontSize: "20px"
      },
      navBarStyles: {
        display: "flex",
        width: "100%",
        position: "fixed",
        zIndex: 300,
        top: 0,
        left: 0,
        alignItems: "center",
        verticalAlign: "middle"
      },
      navBarRowStyles: {
        width: "100%",
        position: "fixed",
        top: 0,
        backgroundColor: "#fff",
        display: "flex"
      },
      logoStyles: {
        verticalAlign: "middle"
      },
      whiteLogoParallaxData: [
        {
          start: 0,
          end: 100,
          properties: [{ startValue: 1, endValue: 0, property: "scale" }]
        }
      ],
      blackLogoParallaxData: [
        {
          start: 0,
          end: 100,
          properties: [{ startValue: 0, endValue: 1, property: "scale" }]
        }
      ],
      linkParallaxData: [
        {
          start: 0,
          end: 100,
          properties: [
            { startValue: "#fff", endValue: "#000", property: "color" }
          ]
        }
      ],
      navBarParallaxData: [
        {
          start: 60,
          end: 100,
          properties: [{ startValue: 1, endValue: -30, property: "translateY" }]
        }
      ],
      navBarRowParallaxData: [
        {
          start: 0,
          end: 50,
          easing: "easeInOut",
          properties: [
            {
              startValue: 1,
              endValue: 2,
              property: "scaleY"
            },
            { startValue: 0, endValue: 0.8, property: "opacity" }
          ]
        },
        {
          start: 60,
          end: 100,
          easing: "easeInOut",
          properties: [{ startValue: 2, endValue: 1, property: "scaleY" }]
        }
      ]
    };
    this.imageContainerRef = React.createRef();
  }
  toggleMobileMenu = () => {
    this.setState(prevState => {
      return { mobileMenu: !prevState.mobileMenu };
    });
  };
  updateDimensions = () => {
    let windowWidth = window.innerWidth;
    let width = windowWidth / 5.5;
    if (width < 200) {
      width = 200;
    } else if (width > 400) {
      width = 400;
    }
    this.setState({ logoWidth: width, width: windowWidth });
  };
  componentDidMount() {
    this.updateDimensions();
    console.log("from navbar, sticky is : " + this.props.sticky);
    window.addEventListener("resize", this.updateDimensions);
    // window.on("scroll", () => {
    //   console.log("scroll position is: " + window.pageYOffset);
    // });
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  togglePortMenu = () => {
    console.log("toggling Portfolio menu");
    this.setState(prevState => {
      return { portMenu: !prevState.portMenu };
    });
  };
  render() {
    let menu;
    let third = window.innerWidth / 3;
    let remainder = third - this.state.logoWidth;
    let margin = remainder / 2;
    let mobileMenu;
    if (this.state.mobileMenu) {
      mobileMenu = <MobileMenu close={this.toggleMobileMenu} />;
    } else {
      mobileMenu = "";
    }
    if (this.state.width < 800) {
      console.log("displaying mobile menu");
      menu = (
        <div className="mobile">
          <Plx
            style={this.state.navBarRowStyles}
            parallaxData={this.state.navBarRowParallaxData}
          >
            <div className="navBarRow"></div>
          </Plx>
          <Plx
            style={this.state.navBarStyles}
            parallaxData={this.state.navBarParallaxData}
          >
            <div className="navBar">
              {" "}
              <div
                ref={this.imageContainerRef}
                className="col col-xs-6 imageContainer blue"
              >
                <div className="image">
                  <Plx
                    style={this.state.logoStyles}
                    parallaxData={this.state.whiteLogoParallaxData}
                  >
                    <img
                      src={whiteLogo}
                      width="200px"
                      alt="Katie Kozma Photography"
                      style={{}}
                      className="logo"
                    />
                  </Plx>
                </div>

                <Plx
                  style={this.state.logoStyles}
                  parallaxData={this.state.blackLogoParallaxData}
                >
                  <img
                    src={logo}
                    alt="Katie Kozma Photography"
                    width="200px"
                    style={{}}
                    className="logo"
                  />
                </Plx>
              </div>
              <div style={{ paddingRight: 30 }} className="col-xs-6">
                <a onClick={this.toggleMobileMenu}>
                  {" "}
                  <Plx
                    style={this.state.linkStyles}
                    parallaxData={this.state.linkParallaxData}
                  >
                    MENU
                  </Plx>
                </a>
              </div>
            </div>
          </Plx>
        </div>
      );
    } else {
      menu = (
        <div>
          <Plx
            style={this.state.navBarRowStyles}
            parallaxData={this.state.navBarRowParallaxData}
          >
            <div className="navBarRow"></div>
          </Plx>
          <Plx
            style={this.state.navBarStyles}
            parallaxData={this.state.navBarParallaxData}
          >
            <div className="navBar">
              <div className="col col-xs-4 text-right green">
                <ul className=" leftList navbar-nav">
                  <li className="nav-item">
                    <Link to="/">
                      <Plx
                        style={this.state.linkStyles}
                        parallaxData={this.state.linkParallaxData}
                      >
                        Home
                      </Plx>
                    </Link>
                  </li>
                  <li className="nav-item btn-group">
                    <a
                      style={{ cursor: "pointer" }}
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <Plx
                        style={this.state.linkStyles}
                        parallaxData={this.state.linkParallaxData}
                      >
                        Portfolio
                      </Plx>
                    </a>
                    <ul className="dropdown-menu portMenu animated fadeIn">
                      <li>
                        <Link to="/portfolio/wedding/">Weddings</Link>
                      </li>
                      <li>
                        <Link to="/portfolio/couples/">Couples</Link>
                      </li>
                      <li>
                        <Link to="/portfolio/nature/">Buttholes</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to="/pricing">
                      <Plx
                        style={this.state.linkStyles}
                        parallaxData={this.state.linkParallaxData}
                      >
                        Pricing
                      </Plx>
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                ref={this.imageContainerRef}
                className="col col-xs-4 imageContainer blue"
              >
                <div width={this.state.logoWidth} className="image">
                  <Plx
                    style={this.state.logoStyles}
                    parallaxData={this.state.whiteLogoParallaxData}
                  >
                    <img
                      src={whiteLogo}
                      alt="Katie Kozma Photography"
                      width={this.state.logoWidth}
                      style={{ marginLeft: margin, marginRight: margin }}
                      className="logo"
                    />
                  </Plx>
                </div>

                <Plx
                  style={this.state.logoStyles}
                  parallaxData={this.state.blackLogoParallaxData}
                >
                  <img
                    src={logo}
                    alt="Katie Kozma Photography"
                    width={this.state.logoWidth}
                    style={{ marginLeft: margin, marginRight: margin }}
                    className="logo"
                  />
                </Plx>
              </div>
              <div className="col col-xs-4 green">
                <ul className="rightList">
                  <li>
                    <Link to="/">
                      <Plx
                        style={this.state.linkStyles}
                        parallaxData={this.state.linkParallaxData}
                      >
                        About
                      </Plx>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <Plx
                        style={this.state.linkStyles}
                        parallaxData={this.state.linkParallaxData}
                      >
                        Contact
                      </Plx>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login">
                      <Plx
                        style={this.state.linkStyles}
                        parallaxData={this.state.linkParallaxData}
                      >
                        Log In
                      </Plx>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Plx>
        </div>
      );
    }
    return (
      <div>
        {menu}
        {mobileMenu}
      </div>
    );
  }
}
