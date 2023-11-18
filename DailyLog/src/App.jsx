import { useState , useEffect } from 'react'

import Title from './Title/Title'
import MainBackground from './MainBackground/MainBackground'
import Homepage from './Homepage/Homepage.jsx'
import Dashboard from "./Dashboard/Dashboard.jsx"
import MainOverlay from './UIComponents/MainOverlay/MainOverlay.jsx'
import Settings from './Settings/Settings.jsx'
import ViewLogs from './ViewLogs/ViewLogs.jsx'
import AddLog from './AddLog/AddLog.jsx'

import styles from './App.module.css'

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [liveTime, setLiveTime] = useState(new Date());
  const [count, setCount] = useState(0);
  const [activeViewLogOverlay, setActiveViewLogOverlay] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);
  const [addLogActive, setAddLogActive] = useState(false);
  
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

  function toggleViewLogsOverlay() {
    if (activeViewLogOverlay) {
      setActiveViewLogOverlay(false)
    }
    if (!activeViewLogOverlay) {
      setActiveViewLogOverlay(true)
    }
  }

  function toggleSettingsHandler() {
    if (settingsActive) {
      setSettingsActive(false)
    }
    if (!settingsActive) {
      setSettingsActive(true)
    }
  }

  function toggleAddLogHandler() {
    if (addLogActive) {
      setAddLogActive(false)
    }
    if (!addLogActive) {
      setAddLogActive(true)
    }
  }

  return (
    <>
      <MainBackground />

      {/* THIS IS THE MAIN OVERLAY FOR POPUPS OR COPOPNENTS THAT REQUIRE PRECEDENCE IN DISPLAY */}
      {activeViewLogOverlay && <MainOverlay><ViewLogs toggleViewLogsOverlay={toggleViewLogsOverlay} /></MainOverlay>}
      {settingsActive && <Settings toggleSettings={toggleSettingsHandler} />}
      {addLogActive && <AddLog toggleAddLog={toggleAddLogHandler} />}

      {/* THIS IS WHERE THE INTRO ANIMATIONS LIVE */}
      {!introFinished && <Title />}

      {/* THIS IS THE MAIN CONTENT OF THE APP. THE HOMEPAGE */}
      {introFinished && 
      <div className={styles["app-container"]}>
          <Dashboard liveTime={liveTime} />
          <Homepage toggleViewLogsOverlay={toggleViewLogsOverlay} toggleSettings={toggleSettingsHandler} toggleAddLog={toggleAddLogHandler} />
      </div>
      }
      
    </>
  )
}

export default App
