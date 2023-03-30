import React, { Component } from "react";

export default class App extends Component {
  //   myusername = React.createRef();
  state = {
    username: "lzr",
  };
  render() {
    return (
      <div>
        <h1>登录页</h1>
        <input
          type="text"
          value={this.state.username}
          onChange={(evt) => {
            console.log("onChange", evt.target.value);
            this.setState({ username: evt.target.value });
          }}
        />
        <button
          onClick={() => {
            console.log(this.state.username);
          }}
        >
          登录
        </button>
        <button
          onClick={() => {
            this.setState({ username: "" });
          }}
        >
          重置
        </button>
      </div>
    );
  }
}
