import React, { Component } from "react";

export default class App extends Component {
  render() {
    var myname = "lzr";
    var obj = {
      background: "yellow",
      color: "red",
      fontSize: "20px",
    };
    return (
      <div>
        {10 + 20}-{myname}
        {10 > 20 ? "aaa" : "bbb"}
        <div style={obj}>11111</div>
        {/* React推荐行内样式
            第一个注释 */}
      </div>
    );
  }
}
