import React, { Component } from "react";
import Children from "../Children";
import { Connect } from "../../context";

export default class index extends Component {
  render() {
    return (
      <div>
        <Connect value={{ age: "18" }}>
          <Children />
        </Connect>
      </div>
    );
  }
}
