import React, { useState } from 'react'
import './App.css'
import StartPage from './pages/StartPage'
import Choose from './pages/Choose_MBTI'

function App() {
  const [startButton, setStart] = useState(true)
  const getStart = (start) => {
    setStart(start)
  }
  const [comp, setComp] = useState(Choose)
  return (
    <>
      <div>
        {/* {startButton && <StartPage getStart={getStart} />}
        {!startButton && <Choose />} */}
        <Choose />
        {/* <button
          style={{
            width: '280px',
            height: '40px',
            backgroundColor: 'white',
            display: 'block',
            margin: '50px auto',
            borderRadius: '40px',
          }}
          onClick={() => {
            setComp(StartPage)
          }}
        >
          테스트 하러가기 →
        </button> */}
      </div>
    </>
    // <>
    //   <header>
    //     {/* <button onClick={() => setComp(StartPage)}>Home</button> */}
    //   </header>
    //   <hr />
    //   <main children={comp} />
    //   <button onClick={() => setComp(Choose)}>About</button>
    // </>
  )
  // <div>
  //   <div
  //     style={{
  //       backgroundColor: 'white',
  //       width: '350px',
  //       marginTop: '60px',
  //       marginLeft: 'auto',
  //       marginRight: 'auto',
  //       marginBottom: '22px',
  //     }}
  //   >
  //     당신의 mbti는 무엇인가요?
  //   </div>
  //   <div style={{ margin: '0 auto', width: '350px' }}>
  //     <div style={{ display: 'flex', justifyContent: 'space-around' }}>
  //       <div
  //         style={{
  //           backgroundColor: 'white',
  //           textAlign: 'center',
  //           border: 'solid 1.8px black',
  //           width: '64px',
  //           height: '27px',
  //           borderRadius: '15px',
  //           paddingTop: '3px',
  //         }}
  //       >
  //         ENTJ
  //       </div>
  //     </div>
  //   </div>
  // </div>
}

export default App
