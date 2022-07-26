import { useState } from 'react'
import './Choose.css'

export default function Choose() {
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
  const [types, setTypes] = useState("")  //types에 mbti받음
  const getTypes = (mbti) =>{
    setTypes(mbti.type)
    isClicked(mbti.id)
  }
  const [click, isClicked] = useState(false)
  return (
    <>
      <div className="Choose">
        <div className="YourMBTI">
          <div style={{ paddingLeft: '12px'}}><strong style={{}}>당신</strong>의 mbti는 무엇인가요?</div>
          <div className="YourTypes">
            {mbtis.map((mbti) =>
            <div 
            className={(click === mbti.id)? mbti.type + mbti.id : mbti.type} 
            onClick={()=>{getTypes(mbti)} }>
            {mbti.type}
            </div>)}
          </div>
        </div>
        <p>{types}</p>
        <p>{click}</p>
      
      </div>
    </>
  )
}
