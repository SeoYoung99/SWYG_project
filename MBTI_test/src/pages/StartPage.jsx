import React, { useEffect } from 'react'
import './Startpage.css'
import logo from '../logo.png'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function StartPage() {
  
  const[userNum, setUsers] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchUsers = async () => {
    try{
      setUsers(0)
      setError(null)
      setLoading(true)
      const response = await axios.get('https://swyg-mbti-quiz.herokuapp.com/main')
      setUsers(response.data)
    }
    catch(e){
      setError(e)
    }
    setLoading(false)
  }
  useEffect(()=>{
    fetchUsers()
  },[])

  //console.log(userNum.quizUserNum)
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
            지금까지 {userNum.quizUserNum} 명이 진행했어요!{' '}
          </div>
        </div>
      </div>
      
    </>
  )
}
export default StartPage
