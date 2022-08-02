import React,{useState} from "react";
import './Result.css'
function ResultPage(props){

  const Answers = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //ESTP
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //ESFP
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //ENFP
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //ENTP
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //ESTJ
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //ESFJ
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //ENFJ
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //ENTJ
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //ISTJ
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //ISFJ
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //INFJ
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //INTJ
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //ISTP
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //ISFP
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //INFP
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //INTP
  ]

  const checkScore = () => {
    let score = 0
    for (let i = 0; i < 10; i++) {
      if (Answers[props.mbti_id-1][i] === Number(props.list[i])) { //받아온 해당 답안 : list
          score += 10
      }
    }
    return score
  }
  //console.log(checkScore())
  return(
    <>
    <div>{props.list}</div>
    <div>{props.mbti_id}</div>
    <div>{props.mbti}</div>
    <div>{checkScore()}</div>
    </>
  )
}
export default ResultPage