import React from 'react';

// MY CUSTOM UI COMPONENT IMPORTS
import Button from '../UIComponents/Buttons/Button.jsx';

// STYLE IMPORTS
import styles from "./Homepage.module.css";

function Homepage(props) {
    
    return (
        <div className={styles.homepage}>
            <Button name="ADD LOG" iconNum={1} onClick={props.toggleAddLog} />
            <Button name="VIEW/EDIT" iconNum={2} onClick={props.toggleViewLogsOverlay} />
            <Button name="OPTIONS" iconNum={3} onClick={props.toggleSettings} />
        </div>
    )
}

export default Homepage;