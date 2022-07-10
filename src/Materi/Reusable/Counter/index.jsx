import React, { Component } from 'react'
import styled from "styled-components";

const Button = styled.button`
    border: none;
    outline: 0;
    padding: 12px;
    color: darkslategrey;
    background-color: lightgreen;
    text-align: center;
    cursor: pointer;
    font-size: 18px;

    &:hover {
        opacity: 0.7;
    }
`

export default class Counter extends Component {
    state = {
        value: 0
    }

    handleMinus = () => {
        this.setState({value: this.state.value - 1},
             () => this.props.receiveValue(this.state.value));

    }

    handlePlus = () => {
        this.setState({value: this.state.value + 1},
          () => this.props.receiveValue(this.state.value));
    }

  render() {
    return (
      <div style={{display: 'flex'}}>
        <Button onClick={this.handleMinus}>-</Button>
        <span>{this.state.value}</span>
        <Button onClick={this.handlePlus}>+</Button>
      </div>
    )
  }
}
