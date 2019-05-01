import React, { Component } from "react";
import BindComponentMethodThis from "./component/BindComponentMethodThis";
import Home from "./pages/Home";
import ConnectContext from "./pages/ConnectContext";

@BindComponentMethodThis
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "sdf"
    };
  }

  getData() {
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div className="head">
          <button className="nav" onClick={this.getData}>
            asdf
          </button>
        </div>
        <Home />
        <ConnectContext />
      </div>
    );
  }
}

export default App;
