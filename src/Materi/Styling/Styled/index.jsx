import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.button`
    border: 2px solid black;
    background-color: white;
    color: black;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    border-color: rgb(83, 204, 248);
    color: dodgerblue;

    &:hover {
        background:  rgb(83, 204, 248);
        color: white;
    }
`;


export default class Styled extends Component {
  render() {
    return (
      <div>
        <Button>Go Eduwork</Button>
      </div>
    )
  }
}
