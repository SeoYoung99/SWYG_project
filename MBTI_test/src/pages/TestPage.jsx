import React from "react";
import './TestPage.css';

function TestPage(){
  return(
    <div className="Background">
      <div className="Center">
        
        <p className="Percent">
          <div className="Logo"><div style={{paddingTop:'19px',paddingLeft:'3px'}}>0%</div></div>
        </p>
        <div className="Question"><div className="MBTI">INTJ</div> 가 집에 혼자 있고 싶다고 하면</div>
        <div style={{paddingTop: '12px'}}>
        <div className="Answer">1. 걱정이 되어 계속 연락하고 찾아간다.</div>
        <div className="Answer">2. 진짜 냅둔다.</div>
        </div>
        <div className="NextBtn">다음 →</div>
      </div>
    </div>
  )
}
export default TestPage