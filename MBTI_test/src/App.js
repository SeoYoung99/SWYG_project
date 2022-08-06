import React, { useEffect, useState, createContext } from 'react'
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Link,
  useLocation,
} from 'react-router-dom'
import './App.css'
import StartPage from './pages/StartPage'
import Choose from './pages/Choose_MBTI'
import TestPage from './pages/TestPage'
import ResultPage from './pages/ResultPage'

// export const MyContext = createContext()

function App() {
  //context에 들어갈 값: 답안 & rankArray

  const [yourMBTI, setYourMBTI] = useState('')
  const [testMBTI, setMBTI] = useState('')
  const [testMBTI_ID, setMBTI_ID] = useState(0)
  const getYourMBTI = (mbti) => {
    setYourMBTI(mbti) //내 mbti
  }
  const getMBTI = (mbti) => {
    setMBTI(mbti) //테스트 할 mbti
  }
  const getMBTI_ID = (mbti_ID) => {
    setMBTI_ID(mbti_ID) //테스트 할 mbti
  }

  let [list, setList] = useState([]) //답안 리스트
  const put = (answer) => {
    setList([...list, answer])
  }
  const erase = () => {
    setList(list.slice(0, -1))
  }

  console.log('App list', list)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <StartPage />
        </Route>
        <Route path="/result">
          {/* <MyContext.Provider value={list}> */}
          <ResultPage
            list={list}
            yourMbti={yourMBTI}
            mbti={testMBTI}
            mbti_id={testMBTI_ID}
          />
          {/* </MyContext.Provider> */}
        </Route>
        <Route path="/YouKnowMe">
          <Choose
            getYourMBTI={getYourMBTI}
            getMBTI={getMBTI}
            getMBTI_ID={getMBTI_ID}
          />
        </Route>
        <Route path="/:testMBTI/:id?">
          <TestPage put={put} erase={erase} list={list} />
        </Route>
      </Switch>
    </div>
  )
}

export default App
