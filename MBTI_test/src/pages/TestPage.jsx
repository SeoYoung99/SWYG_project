import React, { useEffect } from "react";
import { useState } from "react";
import {useParams, useHistory} from 'react-router-dom';
import './TestPage.css';

export const PercentBar=({percent})=>{ //진행률 컴포넌트
  let px = 31.5*percent //채워지는 퍼센트 막대길이
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
    ' 와 매일 같이 하교하다가 "오늘은 혼자 갈게"라고 했을 때의 반응은?',
    ' (이)가 동네에서 범죄가 발생했다는 소식을 들었다면,',
    ' 에게 차사고가 났을 때 "보험 들었어?라고 한다면,"',
    ' (은)는 기분이 안좋을 때,',
    ' (이)가 나를 위해 3시간 동안 머핀을 만들어서 줬다. 나에게 바라는 반응은?',
    ' 한테 지금 이 물건이 필요없다면?',
    ' (이)가 여행을 간다면,',
    ' (이)가 공부하기 싫을 때 하는 생각은?',
    ' 한테 조금 화가 난 티를 냈다. 나에게 어떻게 할까?',
    ' (은)는 이런 선물을 더 좋아한다.'
  ]
  
  const answerList = [ 
    {a1: '응 그랭 잘가! 쿨하게 보내준다', a2: '헉 오늘 무슨일 있나..? 신경쓰인다'},
    {a1: '돌아다니지 말아야지...걱정한다', a2: '무슨일일까?? 궁금해한다'},
    {a1: '나 다쳤다구ㅜㅜ 서운해한다', a2: '들었나???? 바로 생각해본다'},
    {a1: '사람들과 만나 놀아야 한다. 집에 혼자 있으면 괜히 울적해지기만 한다.', a2: '집에서 조용히 쉬고 싶다. 이럴 때 나가봤자 기만 빨린다.'},
    {a1: '"날 위해서 3시간이나 만들었다고? 진짜 감동이야ㅠ"', a2: '"나쁘지 않은데? 근데 조금 단 것 같아서 다음엔 덜 달게 하면 완벽할 것 같아! 고마워!"'},
    {a1: '바로 갖다버린다.', a2: '일단 그냥 둔다. '},
    {a1: '내가 기대하고 계획한 대로 흘러가서 잘 놀고오면 좋겠다~', a2: '계획을 굳이 세워야 해? 재밌게 놀다오면 그게 힐링이지~'},
    {a1: '아 공부하기 싫다. 시험범위가 절반으로 줄어들면 좋을텐데', a2: '아 공부하기 싫다. 투명인간이 된다면 좋을텐데'},
    {a1: '내가 말하기 전까지는 속으로 뭘 잘못했나 생각한다.', a2: '뭐가 문제인지, 왜 화가 났는지 나에게 바로 물어본다.'},
    {a1: '서프라이즈!  감동적인 편지와 함께 아기자기한/멋진 선물', a2: '나에게 직접 물어봐주고 고른 실용적이고 필요한 선물'},
  ]
  
  const params = useParams() //url에서 테스트할 mbti받아오기
  const MBTI = params.testMBTI

  const MBTIStyle = (MBTI) => {
    console.log(MBTI)
    switch(MBTI){
      case 'ESTP':
        return '#558CED'
      case 'ESFP':
        return '#FACD34'
      case 'ENFP':
        return '#EF7654'
      case 'ENTP':
        return '#A0CD31'
      case 'ESTJ':
        return '#D1CD43'
      case 'ESFJ':
        return '#F55E60'
      case 'ENFJ':
        return '#37BC8D'
      case 'ENTJ':
        return '#DA2D90'
      case 'ISTJ':
        return '#3BC55A'
      case 'ISFJ':
        return '#39CCF2'
      case 'INFJ':
        return '#F55682'
      case 'INTJ':
        return '#E7AD73'
      case 'ISTP':
        return '#B780C6'
      case 'ISFP':
        return '#DF566B'
      case 'INFP':
        return '#F4961F'
      case 'INTP':
        return '#7375E7'
      default:
        return 'white'
    }
  }
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
        <PercentBar percent={quiz}/>
        <div className="Question"><div className="MBTI" style={{backgroundColor:MBTIStyle(MBTI)}}>{MBTI}</div>{quizList[quiz-1]}</div>
        <div style={{paddingTop: '12px'}}>
          <div className={(style==='1')? "Answered":"Answer"} onClick={()=>setStyle('1')}>{answerList[quiz-1].a1}</div>
          <div className={(style==='2')? "Answered":"Answer"} onClick={()=>setStyle('2')}>{answerList[quiz-1].a2}</div>
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