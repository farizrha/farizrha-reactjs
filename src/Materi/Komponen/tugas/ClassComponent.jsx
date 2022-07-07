import React, { Component } from 'react'

export default class ClassComponent extends Component {
    state = {
        value: 0
    }

    handlePlus = () => {
        this.setState({value: this.state.value + 1})
    }

    handleMinus = () => {
        if(this.state.value > 0) {
            this.setState({value: this.state.value - 1})
        }
        
    }
    
  render() {
    return (
      <div>
        <h1>Menggunakan State yang ada di ClassComponent</h1>
        <h3>Halo {this.props.nama}, silahkan pesan tiket pesawat anda.</h3>
        <button onClick={this.handleMinus}>-</button>
        <span>{' '} {this.state.value} {'tiket'}</span>
        <button onClick={this.handlePlus}>+</button>
      </div>
    )
  }
}
