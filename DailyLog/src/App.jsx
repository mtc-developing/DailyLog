import { useState , useEffect } from 'react'

import Title from './Title/Title'
import MainBackground from './MainBackground/MainBackground'
import Homepage from './Homepage/Homepage.jsx'
import Dashboard from "./Dashboard/Dashboard.jsx"

import styles from './App.module.css'

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [liveTime, setLiveTime] = useState(new Date());
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(function () {
      setIntroFinished(true)
      console.log("Set intro finished to true")
    }, 11000)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1)
      setLiveTime(new Date())
    }, 60 * 1000);

    return () => clearInterval(interval)
  }, [count])

  return (
    <>
      <MainBackground />
      {!introFinished && <Title />}
      {introFinished && 
      <div className={styles["app-container"]}>
        <Dashboard liveTime={liveTime} />
        <Homepage />
      </div>
      }
      
    </>
  )
}

export default App
