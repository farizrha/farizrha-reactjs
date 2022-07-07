import React, { Component } from 'react'
import './index.scss'
import Title from './Title'

export default class Sass extends Component {
  render() {
    return (
      <div>
        <Title/>
        <h3 className='title'>Belajar Mern</h3>
        <button className='btn btn-danger'>Go Eduwork</button>
      </div>
    )
  }
}
