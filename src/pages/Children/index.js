import React, { Component } from "react";
import { Consumer } from "../../context";

export default class index extends Component {
  render() {
    return (
      <div>
        <Consumer>{data => <div>{JSON.stringify(data)}</div>}</Consumer>
      </div>
    );
  }
}
