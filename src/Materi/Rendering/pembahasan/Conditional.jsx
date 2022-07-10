import React, { Component } from "react";

export default class Conditional extends Component {
    state = {
        isLoading: true
    }

  render() {
    // const isLogin = false;
    // let message = "";
    // if (isLogin) {
    //   message = "anda sudah login";
    // } else {
    //   return (message = "Silahkan login terlebih dahulu");
    // }

    setTimeout( () => {
        this.setState({
            isLoading: false
        })
    }, 3000)

    return (
      <div>
        {this.state.isLoading 
        ? <h1>Loading...</h1>
        : <h1>Selamat datang</h1>}
      </div>
    );
  }
}
