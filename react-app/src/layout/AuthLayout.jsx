import React, { Component } from "react";

export class AuthLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default AuthLayout;
