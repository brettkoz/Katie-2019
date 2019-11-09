import React, { Component } from "react";
import LoadingScreen from "./common/LoadingScreen";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }
  render() {
    let loading;
    if (this.state.loading) {
      loading = <LoadingScreen />;
    } else {
      loading = "";
    }
    return (
      <div>
        {loading}
        CONTACT
      </div>
    );
  }
}
