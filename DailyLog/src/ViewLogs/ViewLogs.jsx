import React from 'react';
import styles from "./ViewLogs.module.css";

function ViewLog(props) {
    
    return (

        <div className={styles["main-container"]}>
            <div className={styles["view-logs-title"]}>today</div>
            <div className={styles.container}>
                <span className={styles["card-container"]}>Dummy Card</span>
                <span className={styles["card-container"]}>Dummy Card</span>
                <span className={styles["card-container"]}>Dummy Card</span>
                <span className={styles["card-container"]}>Dummy Card</span>
                <span className={styles["card-container"]}>Dummy Card</span>
            </div>
            <div className={styles["view-logs-exit"]} onClick={props.toggleViewLogsOverlay}>x</div>
        </div>
    )
}

export default ViewLog