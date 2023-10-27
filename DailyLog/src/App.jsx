import { useState } from 'react'

import Title from './Title/Title'
import MainBackground from './MainBackground/MainBackground'

import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className={styles["app-container"]}>
      <MainBackground />
      {!introFinished && <Title />}
      {introFinished &&
      <div className={styles["main-container"]}>
        {/* MAIN CONTENT */}
      </div>}
    </div>
    
  )
}

export default App
