import React from 'react';

// MY CUSTOM UI COMPONENT IMPORTS
import OverlayTab from '../UIComponents/OverlayTab/OverlayTab';

// MY CUSTOM STYLE IMPORTS
import styles from "./ViewLogs.module.css";

function ViewLog(props) {
    
    return (

        <div className={styles["main-container"]}>
            <OverlayTab text="today" />
            <div className={styles.container}>
                <span className={styles["card-container"]}>Dummy Card</span>
                <span className={styles["card-container"]}>Dummy Card</span>
                <span className={styles["card-container"]}>Dummy Card</span>
                <span className={styles["card-container"]}>Dummy Card</span>
                <span className={styles["card-container"]}>Dummy Card</span>
            </div>
            <OverlayTab text="X" onClick={props.toggleViewLogsOverlay} />
        
        </div>
    )
}

export default ViewLog