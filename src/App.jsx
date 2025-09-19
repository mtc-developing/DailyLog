import { useState , useEffect } from 'react'

import Title from './Title/Title'
import MainBackground from './MainBackground/MainBackground'
import Homepage from './Homepage/Homepage.jsx'
import Dashboard from "./Dashboard/Dashboard.jsx"
import Settings from './Settings/Settings.jsx'
import ViewLogs from './ViewLogs/ViewLogs.jsx'
import AddLog from './AddLog/AddLog.jsx'

// MY CUSTOME STYLE IMPORTS
import styles from './App.module.css'

  const localStorage=window.localStorage

function App() {


  
  // MAIN APP LIST OF LOG OBJECTS, EVENTUALLY TO LIVE IN SOME SORT OF BACKEND, NBBUT FOR NOW LIVES IN LOCAL STORAGE
  const [logList, setLogList] = useState(JSON.parse(localStorage.getItem("logList")))
  const [userEmail, setUserEmail] = useState(localStorage.getItem("userEmail"))

  // STATES FOR LIVE TIME
  const [liveTime, setLiveTime] = useState(new Date());
  const [count, setCount] = useState(0);

  // STATES FOR TOGGLE OVERLAY COMPONENT DISPLAY
  const [introFinished, setIntroFinished] = useState(true);
  const [activeViewLogOverlay, setActiveViewLogOverlay] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);
  const [addLogActive, setAddLogActive] = useState(false);

  useEffect(() => {
    if (!logList.length || !logList[0].log_title) {
      setLogList(DUMMY_LIST_OF_LOGS)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("logList", JSON.stringify(logList))
  }, [logList])

  useEffect(() => {
    setTimeout(function () {
      setIntroFinished(true)
    }, 13000)
  }, [introFinished])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1)
      setLiveTime(new Date())
    }, 60 * 1000);

    return () => clearInterval(interval)
  }, [count])

  function introAnimation() {
    toggleSettingsHandler()
    setIntroFinished(false)
  }

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

  // FUNCTIONALITY FOR SETTING USER EMAIL
  function setUserEmailHandler(email) {
    localStorage.setItem("userEmail", email);
    setUserEmail(email)
  }
  // FUNCTIONALITY FOR UPDATING LIST OF LOG OBJECTS
  function addLogHandler(logObject) {
    if (logList.length === 0) {
      setLogList([ logObject ])
      toggleAddLogHandler();
      return
    }
    setLogList([...logList, logObject ])
    toggleAddLogHandler();
    return
  }

  function deleteLogHandler(logTitle) {
    const filteredList = logList.filter(log => log.log_title != logTitle)
    setLogList(filteredList)
  }

  return (
    <>
      <MainBackground />

      {/* THIS IS THE MAIN OVERLAY FOR POPUPS OR COPOPNENTS THAT REQUIRE PRECEDENCE IN DISPLAY */}
      {activeViewLogOverlay && <ViewLogs toggleViewLogsOverlay={toggleViewLogsOverlay} logList={logList} deleteLog={deleteLogHandler} />}
      {settingsActive && <Settings toggleSettings={toggleSettingsHandler} introAnimation={introAnimation} setUserEmail={setUserEmailHandler} userEmail={userEmail}  />}
      {addLogActive && <AddLog toggleAddLog={toggleAddLogHandler} addLogHandler={addLogHandler} liveTime={liveTime} />}

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