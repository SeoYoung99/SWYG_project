import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.swygbro.com?utm_source=ygb&utm_medium=widget
&utm_campaign=all_time"
        style={{
          boxSizing: 'border-box',
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          justifyItems: 'center',
          bottom: '1.5rem',
          right: '1.5rem',
          padding: '0.5rem',
          borderRadius: '9999rem',
          backgroundColor: 'white',
          filter: 'drop-shadow(2px 4px 15px rgba(0, 0, 0, 0.2))',
          border: 0,
          cursor: 'pointer',
          zIndex: 9999,
        }}
      >
        <img
          alt="widget logo"
          src="https://assets.swygbro.com/img/logo/single/logo_7.png"
          width="32"
          height="32"
        />
      </a>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
