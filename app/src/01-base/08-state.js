import React, { Component } from "react";

export default class App extends Component {
  a = 1;
  //   state = {
  //     mytext: "收藏",
  //     myShow: true,
  //   };

  constructor() {
    super();
    this.state = { mytext: "收藏", myShow: true, myname: "lzr" };
  }

  render() {
    return (
      <div>
        <h1>welcome to my React App - {this.state.myname}</h1>
        <button
          onClick={() => {
            this.setState({ myShow: !this.state.myShow, myname: "xiaoming" }); // 间接修改状态

            if (this.state.myShow) {
              console.log("收藏的逻辑");
            } else {
              console.log("取消收藏的逻辑");
            }
          }}
        >
          {this.state.myShow ? "收藏" : "取消收藏"}
        </button>
      </div>
    );
  }
}
