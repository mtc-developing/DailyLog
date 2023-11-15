import React from 'react';

import styles from "./Dashboard.module.css";

// CREATE AN api CALL TO GET WEATHER UPDATES FOR DASHBOARD
// USE A 3RD PARTY PACKAGE TO FACILITATE DATE/TIME FRAMES IF USED

function correctHour(h) {
    let bad = h;
    bad = parseInt(bad);
    if(bad <= 12) {
        return bad
    }
    if (bad > 12) {
        return(bad-12) 
    }
}

function correctTimeframe(rawHour){
    if (parseInt(rawHour) >= 12) {
        return "pm"
    }
    if (parseInt(rawHour) < 12) {
        return "am"
    }
}

function Dashboard(props) {

    const liveTime = props.liveTime;
    const rawHour = liveTime.getHours();
    const hour = correctHour(rawHour);
    const minute = liveTime.getMinutes();
    const timeframe = correctTimeframe(rawHour);

    return (
        <div className={styles.dashboard}>
            <span classname={styles["dashboard-header"]}>------- daily log -------</span>
            <div className={styles.time}>
                <span>{hour}</span>
                <span className={styles.colon}>:</span>
                <span>{minute}</span>
                <span>{timeframe}</span>
            </div>
            <span className={styles.date}>{liveTime.getDay()}, {liveTime.getMonth()} {liveTime.getDate()}</span>
        </div>
    )
}

export default Dashboard;