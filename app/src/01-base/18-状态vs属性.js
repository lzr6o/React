import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        child-{this.props.text}
        <button
          onClick={() => {
            this.props.text = "333";
          }}
        >
          click-子
        </button>
      </div>
    );
  }
}

export default class App extends Component {
  state = {
    text: "111",
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ text: "222" });
          }}
        >
          click-父
        </button>
        <Child text={this.state.text} />
      </div>
    );
  }
}
