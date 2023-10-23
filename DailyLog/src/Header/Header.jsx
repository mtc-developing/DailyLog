import styles from "./Header.module.css"

import { FaMediumM } from 'react-icons/fa'

function Header() {
    
    return (
        <header className={styles.header}>
            <FaMediumM />
            <h1> Testing Header</h1>
            <FaMediumM />
        </header>
    )
}

export default Header;