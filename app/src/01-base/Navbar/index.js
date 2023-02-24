import React, { Component } from "react";
import lzrPropTypes from "prop-types";

console.log(lzrPropTypes);

export default class Navbar extends Component {
  state = {
    // 只能内部自己用的，外面无法改变
  };

  // 类属性
  static propTypes = {
    title: lzrPropTypes.string,
    leftshow: lzrPropTypes.bool,
  };

  // 默认值
  static defaultProps = {
    leftshow: true,
  };

  a = 100;

  // 属性是父组件传来的，this.props
  render() {
    // console.log(this.props);
    let { title, leftshow } = this.props;
    return (
      <div>
        {leftshow && <button>返回</button>}
        navbar-{title}
        <button>home</button>
      </div>
    );
  }
}

class Test {
  a = 1; // 对象属性
  static a = 100; // 类属性
}
// Test.a = 100
var obj = new Test();
console.log(Test.a, obj.a);
