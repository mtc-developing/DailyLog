import React from 'react';

// MY CUSTOM UI COMPONENT IMPORTS
import Button from '../UIComponents/Buttons/Button.jsx';

// STYLE IMPORTS
import styles from "./Homepage.module.css";

function Homepage() {
    
    return (
        <div className={styles.homepage}>
            <Button name="ADD LOG" iconNum={1} />
            <Button name="VIEW/EDIT" iconNum={2} />
            <Button name="OPTIONS" iconNum={3}/>
        </div>
    )
}

export default Homepage;