import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <input />
        <button
          onClick={() => {
            console.log("click 1 !"); // 如果逻辑过多，不推荐这种写法
          }}
        >
          add 1
        </button>
        <button onClick={this.handleClick2}>add 2</button>
        <button onClick={this.handleClick3}>add 3</button>
        <button
          onClick={() => {
            this.handleClick4(); // 比较推荐
          }}
        >
          add4
        </button>
      </div>
    );
  }

  handleClick2() {
    console.log("click 2 !");
  }

  handleClick3 = () => {
    console.log("click 3 !");
  };

  handleClick4 = () => {
    console.log("click 4 !");
  };
}
