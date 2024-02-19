import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
// import FirstApp from './FirstApp.tsx'
import CounterApp from './CounterApp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstApp title='Hello, I am Fidel' /> */}
    <CounterApp value={20} />
  </React.StrictMode>,
)
