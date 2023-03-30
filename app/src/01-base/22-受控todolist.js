import React, { Component } from "react";
import "./css/01-index.css";
export default class App extends Component {
  a = 100;
  //   myref = React.createRef();

  state = {
    mytext: "",
    list: [
      { id: 1, mytext: "aa", isChecked: false },
      { id: 2, mytext: "bb", isChecked: true },
      { id: 3, mytext: "cc", isChecked: false },
    ],
  };

  render() {
    return (
      <div>
        <input
          value={this.state.mytext}
          onChange={(evt) => {
            this.setState({ mytext: evt.target.value });
          }}
        />

        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          add
        </button>

        <ul>
          {this.state.list.map((item, index) => (
            <li key={item.id}>
              {/* {item.mytext} */}
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => this.handleChecked(index)}
              ></input>
              {/* {item.isChecked ? "删除" : "不删除"} */}
              {/* {富文本展示} */}
              <span
                dangerouslySetInnerHTML={{ __html: item.mytext }}
                style={{ textDecoration: item.isChecked ? "line-through" : "" }}
              ></span>

              {/* <button onClick={this.handleDelClick.bind(this, index)}>
                del
              </button> */}
              <button
                onClick={() => {
                  this.handleDelClick(index);
                }}
              >
                del
              </button>
            </li>
          ))}
        </ul>

        {/* {this.state.list.length === 0 ? <div>暂无待办事项</div> : null} */}

        {/* {this.state.list.length === 0 && <div>暂无待办事项</div>} */}

        <div className={this.state.list.length === 0 ? "" : "hidden"}>
          暂无待办事项
        </div>
      </div>
    );
  }

  handleChecked = (index) => {
    console.log(index);
    let newlist = [...this.state.list];
    newlist[index].isChecked = !newlist[index].isChecked;
    this.setState({
      list: newlist,
    });
  };

  handleClick = () => {
    // console.log("click", this.myref.current.value);

    // 不要直接修改状态，可能会造成不可预期的问题。
    // this.state.list.push(this.myref.current.value);

    let newlist = [...this.state.list];
    newlist.push({
      id: Math.random() * 100000000, // 生成不同 id 的函数
      mytext: this.state.mytext,
      isChecked: false,
    });
    this.setState({ list: newlist, mytext: "" });

    // 清空输入框
    // this.myref.current.value = "";
  };

  handleDelClick(index) {
    console.log("del this", index);
    let newlist = this.state.list.concat();
    newlist.splice(index, 1);
    this.setState({ list: newlist });
  }
}
