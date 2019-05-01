import React, { Component } from "react";
import { Consumer } from "../../context";

export default class Home extends Component {
  render() {
    return (
      <Consumer>
        {data => (
          <div>
            {JSON.stringify(data)}
            <button onClick={() => data.searchTermChanged("Echo")}>修改</button>
          </div>
        )}
      </Consumer>
    );
  }
}
