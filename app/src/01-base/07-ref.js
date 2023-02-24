import React, { Component } from "react";

export default class App extends Component {
  a = 100;
  myref = React.createRef();
  render() {
    return (
      <div>
        <input ref={this.myref} />
        <button
          onClick={() => {
            console.log("click", this.myref.current.value);
          }}
        >
          add
        </button>
      </div>
    );
  }
}
