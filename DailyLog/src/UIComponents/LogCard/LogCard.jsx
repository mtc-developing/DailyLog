import React from 'react';

// MY CUSTOM STYLE FILES
import styles from './LogCard.module.css';

function LogCard(props) {

    return (
        <div className={styles["log-card-container"]}>
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