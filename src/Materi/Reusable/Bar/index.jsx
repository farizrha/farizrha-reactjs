import React, { Component } from 'react'
import { Card } from 'react-bootstrap'


export default class Bar extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }} body>{this.props.value}</Card>
      </div>
    )
  }
}
