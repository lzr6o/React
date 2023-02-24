import React, { Component } from "react";
import axios from "axios";

export default class Cinema extends Component {
  constructor() {
    super();

    this.state = {
      cinemaList: [],
      bakcinemaList: [],
    };

    // axios 第三方的库，专门用于 请求数据
    // axios.get("请求地址").then(res=>{}).catch(err=>{console.log(err)})

    // axios
    //   .get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9805799")
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=9805799",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16755814265573634894594049"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      console.log(res.data.data.cinemas);
      this.setState({
        cinemaList: res.data.data.cinemas,
        bakcinemaList: res.data.data.cinemas,
      });
    });
  }

  // 后面讲的生命周期函数 更适合发送 ajax
  render() {
    return (
      <div>
        <input onInput={this.handleInput} />
        {this.state.cinemaList.map((item) => (
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        ))}
      </div>
    );
  }

  handleInput = (event) => {
    console.log("input", event.target.value);
    var newlist = this.state.bakcinemaList.filter(
      (item) =>
        item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
    );

    // console.log(newlist);

    this.setState({
      cinemaList: newlist,
    });
    // cinemaList 每次都会被重新覆盖
  };
}

/*
filter
*/

var arr = ["aaa", "bbb", "ccc"];
var newarr = arr.filter((item) => item.includes("a"));
console.log(newarr);
