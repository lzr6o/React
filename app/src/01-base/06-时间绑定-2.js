import React, { Component } from "react";

export default class App extends Component {
  a = 100;
  render() {
    return (
      <div>
        <input />
        <button
          onClick={() => {
            console.log("click 1 !", this.a); // 如果逻辑过多，不推荐这种写法
          }}
        >
          add 1
        </button>
        <button onClick={this.handleClick2.bind(this)}>add 2</button>
        {/* 不推荐这种写法 */}
        <button onClick={this.handleClick3}>add 3</button>
        {/* 推荐这种写法 */}
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
    console.log("click 2 !", this.a);
  }

  handleClick3 = (evt) => {
    console.log("click 3 !", this.a, evt.target);
  };

  handleClick4 = () => {
    console.log("click 4 !", this.a);
  };
}

/*
  call : 改变 this 指向, 自动执行函数
  apply : 改变 this 指向, 自动执行函数
  bind : 改变 this 指向, 不会自动执行函数，手动加()执行函数
*/

/*React 并不会真正的绑定事件到每一个具体的 DOM 元素上，而是采用事件代理的模式 */
