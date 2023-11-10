import React from 'react';

// MY CUSTOM UI COMPONENT IMPORTS
import Button from '../UIComponents/Buttons/Button.jsx';

// STYLE IMPORTS
import styles from "./Homepage.module.css";

function Homepage() {
    
    return (
        <div className={styles.homepage}>
            <Button name="ADD LOG" />
            <Button name="VIEW/EDIT" />
            <Button name="OPTIONS" />
        </div>
    )
}

export default Homepage;