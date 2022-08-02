import React from 'react'
import './Startpage.css'
import logo from '../logo.png'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function StartPage() {
  return (
    <>
      <div className="App">
        <div className="Text">
          <img
            src={logo}
            style={{
              width: '270px',
              height: '100px',
              margin: 'auto',
              paddingLeft: '75px',
              paddingBottom: '75px',
            }}
            alt="logo"
          />
          <Link to='/YouKnowMe' style={{textDecoration:'none', color: 'black'}}>
          <div className="StartBtn">
            테스트 하러가기 →
          </div>
          </Link>
          <div
            style={{ color: 'white', textAlign: 'center', paddingTop: '30px' }}
>
            지금까지 300 명이 진행했어요!{' '}
          </div>
        </div>
      </div>
      
    </>
  )
}
export default StartPage
