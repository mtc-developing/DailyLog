import React, { useState , useEffect } from 'react'

import Title from './Title/Title'
import MainBackground from './MainBackground/MainBackground'
import Homepage from './Homepage/Homepage.jsx'
import Dashboard from "./Dashboard/Dashboard.jsx"
import Settings from './Settings/Settings.jsx'
import ViewLogs from './ViewLogs/ViewLogs.jsx'
import AddLog from './AddLog/AddLog.jsx'

// MY CUSTOME STYLE IMPORTS
import styles from './App.module.css'

const DUMMY_LIST_OF_LOGS = [{
  log_title: "dishes",
  log_type: "home chores",
  log_description: "unloaded 2 full loads, loaded 2, handwashed and dried, put aweay",
  log_start_time: "4:22pm",
  log_end_time: "5:30pm",
  log_count: null,
  log_dummy_test: true
},
{
  log_title:"react coding",
  log_type:"web dev" ,
  log_description:"worked on daily log app, style updates and functionality for different log types" ,
  log_start_time:"6:30pm" ,
  log_end_time:"8:00pm" ,
  log_count: null
  }]

function App() {
  const [introFinished, setIntroFinished] = useState(true);

  const [logList, setLogList] = useState(DUMMY_LIST_OF_LOGS)

  // STATES FOR LIVE TIME
  const [liveTime, setLiveTime] = useState(new Date());
  const [count, setCount] = useState(0);

  // STATES FOR TOGGLE OVERLAY COMPONENT DISPLAY
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

  // TOGGLE VIEW HANDLING FOR EACH OVERLAY COMPONENT

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
      return
    }
    setAddLogActive(true)
  }

  // FUNCTIONALITY FOR UPDATING LIST OF LOG OBJECTS
  function addLogHandler(logObject) {
    if (logList[0].log_dummy_test) {
      setLogList([ logObject ])
      toggleAddLogHandler();
      return
    }
    setLogList([...logList, logObject ])
    toggleAddLogHandler();
    return
  }

  return (
    <>
      <MainBackground />

      {/* THIS IS THE MAIN OVERLAY FOR POPUPS OR COPOPNENTS THAT REQUIRE PRECEDENCE IN DISPLAY */}
      {activeViewLogOverlay && <ViewLogs toggleViewLogsOverlay={toggleViewLogsOverlay} logList={logList} />}
      {settingsActive && <Settings toggleSettings={toggleSettingsHandler} />}
      {addLogActive && <AddLog toggleAddLog={toggleAddLogHandler} addLogHandler={addLogHandler} />}

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