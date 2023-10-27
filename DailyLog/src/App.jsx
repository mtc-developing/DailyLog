import { useState } from 'react'

import Header from './Header/Header'
import MainBackground from './MainBackground/MainBackground'

import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainBackground />
      <div className={styles["main-container"]}>
        <Header />
      </div>
    </>
    
  )
}

export default App
