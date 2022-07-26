import React from 'react'
import './Startpage.css'
import logo from '../logo.png'
import { useState } from 'react'

function StartPage({ getStart }) {
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
          <div
            className="StartButton"
            style={{ cursor: 'pointer' }}
            onClick={() => getStart(false)}
          >
            테스트 하러가기 →
          </div>
          <div
            style={{ color: 'white', textAlign: 'center', paddingTop: '30px' }}
          >
            지금 300 명이 진행 중이에요!{' '}
          </div>
        </div>
      </div>
    </>
  )
}
export default StartPage
