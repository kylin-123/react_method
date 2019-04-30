import React, { Component } from "react";
import BindComponentMethodThis from "./component/BindComponentMethodThis";

@BindComponentMethodThis
class App extends Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.state = {
      name: "sdf"
    };
  }

  componentDidMount() {
    //console.log(this.props.path);
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
        <div className="content">asd</div>
      </div>
    );
  }
}

export default App;
