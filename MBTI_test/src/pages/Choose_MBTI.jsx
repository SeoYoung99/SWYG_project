import { useState } from 'react'
import {Link} from 'react-router-dom'
import './Choose.css'

export default function Choose(props) {
  const mbtis = [
    {id: 1, type:'ESTP'},
    {id: 2, type:'ESFP'},
    {id: 3, type:'ENFP'},
    {id: 4, type:'ENTP'},
    {id: 5, type:'ESTJ'},
    {id: 6, type:'ESFJ'},
    {id: 7, type:'ENFJ'},
    {id: 8, type:'ENTJ'},
    {id: 9, type:'ISTJ'},
    {id: 10, type:'ISFJ'},
    {id: 11, type:'INFJ'},
    {id: 12, type:'INTJ'},
    {id: 13, type:'ISTP'},
    {id: 14, type:'ISFP'},
    {id: 15, type:'INFP'},
    {id: 16, type:'INTP'},
  ]
  const [yourTypes, setYourTypes] = useState("")  //나의 mbti받음
  const getYourTypes = (mbti) =>{
    setYourTypes(mbti.type)
    yourClicked(mbti.id)
  }
  const [Types, setTypes] = useState("")  //상대방의 mbti받음
  
  const getTypes = (mbti) =>{
    props.getMBTI(mbti.type)
    props.getMBTI_ID(mbti.id)
    setTypes(mbti.type)
    isClicked(mbti.id)
  }
  const [yourClick, yourClicked] = useState(false) //mbti id
  const [click, isClicked] = useState(false) //mbti id
  return(
    <>
      <div className="Choose">
        <div className="YourMBTI">
          <div style={{ paddingLeft: '12px'}}><strong style={{fontSize:'20px',color:'#2A6FFF'}}>당신</strong>의 mbti는 무엇인가요?</div>
          <div className="YourTypes">
            {mbtis.map((mbti) =>
            <div 
            className={(yourClick === mbti.id)? mbti.type + mbti.id : mbti.type} 
            onClick={()=>{getYourTypes(mbti)} }>
            {mbti.type}
            </div>)}
          </div>
          <div style={{paddingTop:'3vh'}}>
            <div style={{ paddingLeft: '12px'}}>내가 알고 싶은 <strong style={{fontSize:'20px', color:'#FF2D5F'}}>상대방</strong>의 mbti는 무엇인가요?</div>
            <div className="YourTypes">
              {mbtis.map((mbti) =>
              <div 
              className={(click === mbti.id)? mbti.type + mbti.id : mbti.type} 
              onClick={()=>{getTypes(mbti)} }>
              {mbti.type}
            </div>)}
            </div>
          </div>
          <Link to = {`/${Types}/1`} style={{textDecoration:'none', color: 'black'}}>
          {yourClick && click &&<div className='GoBtn'>다음으로 GO!</div>}
          </Link>
        </div>
        
      
      </div>
    </>
  )
}
