import { useState , useEffect } from 'react'

import Title from './Title/Title'
import MainBackground from './MainBackground/MainBackground'
import Homepage from './Homepage/Homepage.jsx'
import Dashboard from "./Dashboard/Dashboard.jsx"
import MainOverlay from './UIComponents/MainOverlay/MainOverlay.jsx'

import styles from './App.module.css'

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [liveTime, setLiveTime] = useState(new Date());
  const [count, setCount] = useState(0);
  const [activeMainOverlay, setActiveMainOverlay] = useState(true);
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

  function toggleMainOverlay() {
    if (activeMainOverlay) {
      setActiveMainOverlay(false)
    }
    if (!activeMainOverlay) {
      setActiveMainOverlay(true)
    }
  }

  return (
    <>
      <MainBackground />

      {/* THIS IS THE MAIN OVERLAY FOR POPUPS OR COPOPNENTS THAT REQUIRE PRECEDENCE IN DISPLAY */}
      {activeMainOverlay && <MainOverlay />}

      {/* THIS IS WHERE THE INTRO ANIMATIONS LIVE */}
      {!introFinished && <Title />}

      {/* THIS IS THE MAIN CONTENT OF THE APP. THE HOMEPAGE */}
      {introFinished && 
      <div className={styles["app-container"]}>
        <Dashboard liveTime={liveTime} />
        <Homepage toggleMainOverlay={toggleMainOverlay} />
      </div>
      }
      
    </>
  )
}

export default App
