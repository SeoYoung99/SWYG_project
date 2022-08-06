import React,{useState, useEffect, useContext} from "react";
import './Result.css'
import axios from "axios";
import score0 from '../image 24.png'
import score10 from '../image 12.png'
import score20 from '../image 13.png'
import score30 from '../image 14.png'
import score40 from '../image 15.png'
import score50 from '../image 16.png'
import score60 from '../image 17.png'
import score70 from '../image 18.png'
import score80 from '../image 19.png'
import score90 from '../image 20.png'
import score100 from '../image 21.png'

const MBTIStyle = (MBTI) => { //mbti별 스타일링 함수
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

export const ShowScore=(props)=>{ //점수에 따라 다른 img와 문구
  
  switch(props.score){
      case 0: 
        return <div>
            <img src={score0} alt="logo"/>
            <div className="ScoreText">당신은 
            <span className="MBTIColor" style={{backgroundColor:MBTIStyle(props.mbti)}}>{props.mbti}</span>
             에 대해 정말 하나도 모르시는군요 😂 </div>
        </div>
      case 10: 
        return <div>
            <img src={score10} alt="logo"/>
            <div className="ScoreText">당신은
            <span className="MBTIColor" style={{backgroundColor:MBTIStyle(props.mbti)}}>{props.mbti}</span>
             에 대해 정말 모르시는군요 😂 </div>
        </div>
      case 20: 
        return <div>
            <img src={score20} alt="logo"/>
            <div className="ScoreText">당신은
            <span className="MBTIColor" style={{backgroundColor:MBTIStyle(props.mbti)}}>{props.mbti}</span>
             에 대해 정말 모르시는군요 😂 </div>
        </div>
      case 30: 
        return <div>
            <img src={score30} alt="logo"/>
            <div className="ScoreText">당신은
            <span className="MBTIColor" style={{backgroundColor:MBTIStyle(props.mbti)}}>{props.mbti}</span>
             에 대해 잘 모르시는군요 🤔 </div>
        </div>
      case 40: 
        return <div>
            <img src={score40} alt="logo"/>
            <div className="ScoreText">당신은
            <span className="MBTIColor" style={{backgroundColor:MBTIStyle(props.mbti)}}>{props.mbti}</span>
             에 대해 잘 모르시는군요 🤔 </div>
        </div>
      case 50: 
        return <div>
            <img src={score50} alt="logo"/>
            <div className="ScoreText">당신은
            <span className="MBTIColor" style={{backgroundColor:MBTIStyle(props.mbti)}}>{props.mbti}</span>
             에 대해 적당히 아시는군요.🙂 </div>
        </div>
      case 60: 
        return <div>
            <img src={score60} alt="logo"/>
            <div className="ScoreText">당신은
            <span className="MBTIColor" style={{backgroundColor:MBTIStyle(props.mbti)}}>{props.mbti}</span>
             에 대해 어느정도 알고 계시네요.🙂 </div>
        </div>
      case 70: 
        return <div>
            <img src={score70} alt="logo"/>
            <div className="ScoreText">당신은
            <span className="MBTIColor" style={{backgroundColor:MBTIStyle(props.mbti)}}>{props.mbti}</span>
             에 대해 꽤 알고 계시네요!😉 </div>
        </div>
      case 80: 
        return <div>
            <img src={score80} alt="logo"/>
            <div className="ScoreText">당신은
            <span className="MBTIColor" style={{backgroundColor:MBTIStyle(props.mbti)}}>{props.mbti}</span>
             에 대해 잘 알고 계시네요!😗 </div>
        </div>
      case 90: 
        return <div>
            <img src={score90} alt="logo"/>
            <div className="ScoreText">당신은
            <span className="MBTIColor" style={{backgroundColor:MBTIStyle(props.mbti)}}>{props.mbti}</span>
             에 대해 잘 알고 계시네요!😙 </div>
        </div>
      case 100: 
        console.log('100')
        return <div>
          <img src={score100} alt="logo"/>
          <div className="ScoreText">당신은 
          <span className="MBTIColor" style={{backgroundColor:MBTIStyle(props.mbti)}}>{props.mbti}</span>
            를 정말 잘 알고있군요!!!👍 </div>
        </div>
      default: 
        return 0
  }
}

function ResultPage(props){
  const Tag = [
    [' #강한 자기주장', '  #자아가 비대함', '  #끝없는 의심', '  #긍정 피플', '  #순간을 살아감'],
    [' #경험으로 인생을 이해', '  #극도로 낙천적', '  #매우 즉흥적', '  #갈등은 절대 싫어','  #흥청망청'],
    [' #쉽게 질림', '  #충동적 결정', '  #감정 충만', '  #뜬금없이 흥분', '  #슈퍼 인싸'],
    [' #슈퍼솔직', '  #하나에 집중 불가능','  #세상은 내 위주','  #쟤랑 놀면 안된다의 ‘쟤’','  #감정적 공감 불가'],
    [' #고집 쎔','  #완벽주의','  #시작하면 끝을 봄','  #헛소리 용납X', '  #감정은 모르겠고 일 끝내는게 우선'],
    [' #예의와 친절','  #은혜는 갚음','  #참는것에 익숙','  #모르는 게 없길 바람','  #다양한 취미'],
    [' #친구 많음','  #과한 열정','  #정이 넘침','  #진보적','  #이상주의자'],
    [' #한다면 무조건 함','  #슈퍼 솔직','  #효율과 사랑에 빠짐','  #경쟁에선 반드시 승리','  #고양이형 인간'],
    [' #혼자 일함','  #감정 표현 할줄 모름','  #변화 안좋아함','  #계획은 차근차근','  #완벽주의'],
    [' #자기가 도움이 될 거라 믿음','  #가족애가 강함','  #충직 헌신','  #주의 깊음','  #배려와 인내심'],
    [' #다른 사람 기분에 예민','  #너그러움','  #다 주거나 아무것도 없거나','  #착하면서 억지로 삐뚤어지려함','  #가끔식 무력감 느낌'],
    [' #플랜A 플랜B 플랜C','  #완벽주의','  #최악의 단점은 나 자신','  #팀플은 최악','  #창의적으로 복수'],
    [' #반항적','  #객관적이 되고 싶음','  #사람 많은 곳 금물','  #자기주장 강함','  #말 별로 없음']
    [' #엄청 독립적','  #솔직하고 진실됨','  #리액션 잘함','  #차갑게 보이는 순둥이','  #소심함'],
    [ '#생각 엄청 많음','  #몽상가','  #눈치 엄청 봄','  #감성 충만','  #단체보다는 개인'],
    [' #감정적 공감 서툼','  #맞춤법 집착','  #소수의 절친이면 충분','  #나만의 규칙','  #완전 중립']
  ]
  const Answers = [
    [1, 1, 2, 1, 2, 2, 2, 1, 2, 2], //ESTP
    [2, 1, 1, 1, 1, 2, 2, 1, 2, 1], //ESFP
    [2, 2, 1, 1, 1, 2, 2, 2, 2, 1], //ENFP
    [1, 2, 2, 1, 2, 2, 2, 2, 2, 2], //ENTP
    [1, 1, 2, 1, 2, 1, 1, 1, 2, 2], //ESTJ
    [2, 1, 1, 1, 1, 1, 1, 1, 2, 1], //ESFJ
    [2, 2, 1, 1, 1, 1, 1, 2, 2, 1], //ENFJ
    [1, 2, 2, 1, 2, 1, 1, 2, 2, 2], //ENTJ
    [1, 1, 2, 2, 2, 1, 1, 1, 1, 2], //ISTJ
    [2, 1, 1, 2, 1, 1, 1, 1, 1, 1], //ISFJ
    [2, 2, 1, 2, 1, 1, 1, 2, 1, 1], //INFJ
    [1, 2, 2, 2, 2, 1, 1, 2, 1, 2], //INTJ
    [1, 1, 2, 2, 2, 2, 2, 1, 1, 2], //ISTP
    [2, 1, 1, 2, 1, 2, 2, 1, 1, 1], //ISFP
    [2, 2, 1, 2, 1, 2, 2, 2, 1, 1], //INFP
    [1, 2, 2, 2, 2, 2, 2, 2, 1, 2], //INTP
  ]

  let score = 0
  let yourMbti = ""
  let MBTI = ""
  
    for (let i = 0; i < 10; i++) {
      if (Answers[props.mbti_id-1][i] === Number(props.list[i])) { 
        //받아온 해당 답안 : list
          score += 10
      }
    }
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  yourMbti = props.yourMbti
  MBTI = props.mbti

  useEffect(()=>{
    fetchUsers()
  },[])
  
  const fetchUsers = async () => {
    try{
      setData([])
      setError(null)
      setLoading(true)
      const response = await axios.post('https://swyg-mbti-quiz.herokuapp.com/result',
      {
        'userMbti' : yourMbti,
        "quizMbti" : MBTI,
        "score" : score
      })
      setData((prev)=> ([...prev, response.data.rank]))
    }
    catch(e){
      setError(e)
    }
    setLoading(false)
  }

  const testAgain= () => { //다시 테스트하기 버튼 클릭 시
    window.location.replace('/')
  }
  const handle = () => {
    if (navigator.share) {
        navigator.share({
          title: '너! 나 알아?',
          text: 'YouKnowME?',
          url: 'http://localhost:3000/result',
      });
  }else{
      alert("공유하기가 지원되지 않는 환경 입니다.") //웹에서는 되는데,,, 앱에서 안됨..why?
  }
}
  return(
    <div className="Result">
      <div className="Score">당신의 점수는...</div>
      <div style={{textAlign:'center'}}>
        <ShowScore score={score} mbti={props.mbti}/>
      </div>
      <div className="Border">
        <div style={{textAlign:'center', paddingTop:'2px'}}>
          <span style={{width:'60px', height:'36px', backgroundColor:MBTIStyle(props.mbti)}} className="MBTIColor">{props.mbti}</span>
           는! 이런 특징을 가지고 있어요.</div>
           <div className="Character">{Tag[props.mbti_id-1]}</div>
      </div>
      <div style={{width:'350px', height:'160px',backgroundColor:'white',margin:'10px 20px'}}>그래프
      
      </div>
      <div style={{display:'flex'}}> 
        <div className="AgainBtn" onClick={testAgain}>다시 테스트하기</div>
        <div className="Share" onClick={handle}>공유하기</div>
      </div>
    </div>
  )
}
export default ResultPage