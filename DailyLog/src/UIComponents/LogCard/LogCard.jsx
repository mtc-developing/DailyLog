import React from 'react';

// MY CUSTOM STYLE FILES
import styles from './LogCard.module.css';

function calculateDuration(start, end) {
    // neeed raw times
}

function LogCard(props) {

    // this section could likely be causing issues, do not merge to master branch yet
    const duration = calculateDuration(props.logCardStartTime, props.logCardEndTime) || "45min";

    function deleteLogHandler() {
        props.deleteLog(props.logCardTitle)
    }

    return (
        <div className={styles["log-card-container"]}>
            <span className={styles.delete} onClick={deleteLogHandler}>x</span>
            <div className={styles["title-container"]}>
                <div>{props.logCardCategory}</div>
                <div className={styles.title}>{props.logCardTitle}</div>
                <div>{props.logCardDuration}</div>
            </div>
            <div className={styles["description-container"]}>
                <div>{props.logCardDescription}</div>
                <div className={styles.timeframe}>{props.logCardStartTime + " - "}{props.logCardEndTime}</div>
            </div>
        </div>
    )
}

export default LogCard;