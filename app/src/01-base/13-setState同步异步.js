import React, { Component } from "react";

export default class App extends Component {
  state = { count: 1 };

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleAdd1}>add</button>
        <button onClick={this.handleAdd2}>add</button>
      </div>
    );
  }

  handleAdd1 = () => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
      }
    );

    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
      }
    );

    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
        // 状态 和 真实 dom 已经更新完了
      }
    );
  };

  handleAdd2 = () => {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);

      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);

      this.setState({
        count: this.state.count + 1,
      });
      console.log(this.state.count);
    }, 0);
  };
}

/*
    setState 处在同步的逻辑中，异步更新状态，异步更新真实 dom
    setState 处在异步的逻辑中，同步更新状态，同步更新真实 dom
    
    setState 接受第二个参数，第二个参数是回调函数，状态和 dom 更新完后就会被触发
*/
