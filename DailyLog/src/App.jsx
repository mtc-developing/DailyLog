import { useState } from 'react'

import Header from './Header/Header'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles["main-container"]}>
      <Header />
    </div>
  )
}

export default App
