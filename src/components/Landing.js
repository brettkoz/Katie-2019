import React, { Component } from "react";
import Plx from "react-plx";
import NavBar from "./nav/NavBar";
import { compose } from "redux";
import { withFirebase } from "./../firebase/index";
import pic1 from "./../assets/image1.jpg";
import pic2 from "./../assets/image2.jpg";
import pic3 from "./../assets/image3.jpg";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navSticky: false,
      scrolled: false,
      styles: {
        width: 100,
        height: 100,
        lineHeight: "100px",
        textAlign: "center",
        borderRadius: 20,
        backgroundColor: "#34ba9c",
        color: "#fff",
        left: "50%",
        marginLeft: -50,
        top: 100,
        position: "fixed",
        fontFamily: "Helvetica, Arial, sans-serif"
      },
      exampleParallaxData: [
        {
          start: 0,
          end: 300,
          properties: [
            {
              startValue: 0,
              endValue: 90,
              property: "rotate"
            },
            {
              startValue: 1,
              endValue: 1.5,
              property: "scaleY"
            },
            {
              startValue: 1,
              endValue: 0.75,
              property: "opacity"
            }
          ]
        },
        {
          start: 350,
          duration: 300,
          properties: [
            {
              startValue: "#3cb99c",
              endValue: "rgba(50,50,200,0.8)",
              property: "backgroundColor"
            },
            {
              startValue: 0,
              endValue: 100,
              property: "translateY"
            },
            {
              startValue: 0.75,
              endValue: 1,
              property: "opacity"
            }
          ]
        },
        {
          start: 700,
          duration: 1000,
          properties: [
            {
              startValue: 100,
              endValue: 0,
              property: "translateY"
            },
            {
              startValue: 1.5,
              endValue: 2,
              property: "scale"
            },
            {
              startValue: 90,
              endValue: 0,
              property: "rotate"
            },
            // Blur is not performant
            // Used just as an example for CSS filters
            {
              startValue: 0,
              endValue: 2,
              property: "blur"
            }
          ]
        }
      ]
    };
  }
  throttle = (fn, wait) => {
    var time = Date.now();
    return function() {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      } else if (window.pageYOffset == 0) {
        fn();
        time = Date.now();
      }
    };
  };
  componentDidMount() {
    window.addEventListener("scroll", this.throttle(this.handleScroll, 1000));
  }
  handleScroll = () => {
    console.log("scrolled in bigNav position is : " + window.pageYOffset);
    if (window.pageYOffset > 0) {
      this.setState({ navSticky: true, scrolled: true });
    } else if (window.pageYOffset === 0) {
      this.setState({ navSticky: false, scrolled: true });
    }
  };
  render() {
    let parralaxStuff = (
      <Plx
        parallaxData={this.state.exampleParallaxData}
        style={this.state.styles}
      >
        Hello!
      </Plx>
    );
    console.log("sticky from landing is : " + this.state.navSticky);
    return (
      <div className="landingContainer">
        <NavBar
          parallaxData={this.state.exampleParallaxData}
          scrolled={this.state.scrolled}
          sticky={this.state.navSticky}
        />
        <div
          className="landingImage"
          style={{
            backgroundImage: "url(" + pic3 + ")"
          }}
        ></div>
        <div className="features">
          <h1>Some More Photography Shit</h1>
        </div>
        <div
          className="landingImage"
          style={{
            backgroundImage: "url(" + pic1 + ")"
          }}
        ></div>
      </div>
    );
  }
}

export default compose(withFirebase)(Landing);
