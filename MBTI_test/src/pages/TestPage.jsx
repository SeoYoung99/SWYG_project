import React, { useEffect } from "react";
import { useState } from "react";
import {useParams, useHistory} from 'react-router-dom';
import './TestPage.css';

export const PercentBar=({percent})=>{ //진행률 컴포넌트
  let px = 31*percent //채워지는 퍼센트 막대길이
  return(
  <p className="Percent">
    <div className="PercentColored" style={{width:px+5}}/>
    <div className="Logo" style={{marginLeft:px}}>
      <div style={{paddingTop:'22px',paddingLeft:'4px',fontSize:'13px'}}>
        {percent}0%
      </div>
    </div>
  </p>
  )
}

function TestPage(props){

  const quizList = [ //10문제
    ' 가 집에 혼자있고 싶다고 한다면',
    ' 가 우울하다고 한다면',
    ' 3번문제',
    ' 4번문제',
    ' 5번문제',
    ' 6번문제'
  ]
  
  const answerList = [ 
    {type: 'ENTP', a1_1: '1. 걱정이 되어 계속 연락하고 찾아간다.', a1_2: '2. 그냥 놔둔다.'}
  ]
  
  const params = useParams() //url에서 테스트할 mbti받아오기
  const MBTI = params.testMBTI
  //console.log(params.id)
  const [style, setStyle] = useState('') //답안 클릭 시 달라지는 스타일

  let [quiz, setQuiz] = useState(Number(params.id)) //quiz번호를 state로 관리
  
  let history = useHistory()
  
  const nextQuiz= () => { //다음 버튼 클릭 시
    //클릭된 답안 가져오기
    if(style === ''){
      return
    }
    else{
      props.put(style)
      if(quiz === 10){
        history.push('/result')
        console.log('go to result')
      }
      else{
        setQuiz(prevQuiz => prevQuiz +1) //quiz번호 증가
      }
    }
  }
   const previousQuiz= () => { //이전 버튼 클릭 시
      props.erase()
      if(quiz === 1){
        history.push('/YouKnowMe')
      }
      else{
        setQuiz(prevQuiz => prevQuiz -1 ) //quiz번호 감소}
    } 
  }
  useEffect (() => {
      history.push(`/${MBTI}/${quiz}`) //quiz번호 변화 시 url변경
    },[quiz])
  
  console.log(params, quiz)
   

  return(
    <div className="Background">
      <div className="Center">
        {/* <p className="Percent">
          <div className="Logo"><div style={{paddingTop:'20px',paddingLeft:'3px'}}>0%</div></div>
        </p> */}
        <PercentBar percent={quiz}/>
        <div className="Question"><div className="MBTI">{MBTI}</div>{quizList[quiz-1]}</div>
        <div style={{paddingTop: '12px'}}>
          <div className={(style==='1')? "Answered":"Answer"} onClick={()=>setStyle('1')}>1. 걱정이 되어 계속 연락하고 찾아간다.</div>
          <div className={(style==='2')? "Answered":"Answer"} onClick={()=>setStyle('2')}>2. 진짜 냅둔다.</div>
        </div>
        <div style={{display:'flex'}}> 
          <div className="NextBtn" onClick={previousQuiz}>← 이전</div>
          <div className="NextBtn" onClick={nextQuiz}>다음 →</div>
        </div>
      </div>
    </div>
  )
}
export default TestPage