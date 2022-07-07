import React, { Component } from 'react'
import style from './index.module.css'

export default class Module extends Component {
  render() {
    return (
      <div>
        <button className={`${style.btn} ${style.info}`}>Go Eduwork</button>
      </div>
    )
  }
}
