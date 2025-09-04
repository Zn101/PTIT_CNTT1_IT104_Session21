import React, { Component } from 'react'
import './index.css'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'
import Bai5 from './components/Bai5'
import Bai6 from './components/Bai6'
export default class App extends Component {
  render() {
    const boxStyle: React.CSSProperties = {
      border: '2px solid red',
      padding: '16px',
      marginBottom: '16px'
    }

    return (
      <div>
        <div style={boxStyle}><Bai1 /></div>
        <div style={boxStyle}><Bai2 /></div>
        <div style={boxStyle}><Bai3 /></div>
        <div style={boxStyle}><Bai4 /></div>
        <div style={boxStyle}><Bai5 /></div>
        <div style={boxStyle}><Bai6 /></div>
      </div>
    )
  }
}
