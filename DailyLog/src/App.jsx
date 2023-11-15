import { useState , useEffect } from 'react'

import Title from './Title/Title'
import MainBackground from './MainBackground/MainBackground'
import Homepage from './Homepage/Homepage.jsx'
import Dashboard from "./Dashboard/Dashboard.jsx"

import styles from './App.module.css'

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [liveTime, setLiveTime] = useState(() => {
    let liveDate = new Date();
    let liveHour = liveDate.getHours() + ":";
    let liveMinute = liveDate.getMinutes() + "";
    let timeOutput = liveHour + liveMinute;
    return timeOutput
  });

  useEffect(() => {
    setTimeout(function () {
      setIntroFinished(true)
      console.log("Set intro finished to true")
    }, 11000)
  }, [])

  return (
    <>
      <MainBackground />
      {!introFinished && <Title />}
      {introFinished && 
      <div className={styles["app-container"]}>
        <Dashboard />
        <Homepage />
      </div>
      }
      
    </>
  )
}

export default App
