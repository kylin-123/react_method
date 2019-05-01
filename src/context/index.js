import React from "react";

const values = {
  name: "kylin"
};

export const { Provider, Consumer } = React.createContext(values);

export class Connect extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <Consumer>
        {data => (
          <Provider value={{ ...data, ...value }}>
            {this.props.children}
          </Provider>
        )}
      </Consumer>
    );
  }
}

export class MyProvider extends React.Component {
  constructor() {
    super();
    this.state = values;
    this.searchTermChanged = this.searchTermChanged.bind(this);
  }
  searchTermChanged(name) {
    this.setState({ name });
  }
  render() {
    return (
      <Provider
        value={{ ...this.state, searchTermChanged: this.searchTermChanged }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
