import React from 'react';

import styles from "./Dashboard.module.css";

// CREATE AN api CALL TO GET WEATHER UPDATES FOR DASHBOARD
// USE A 3RD PARTY PACKAGE TO FACILITATE DATE/TIME FRAMES IF USED

function correctHour(rawHour) {
    let bad = parseInt(rawHour);
    if (bad === 0) {
        return 12
    }
    if (bad > 12) {
        return (bad - 12)
    }
    return bad
    
}

function correctTimeframe(rawHour){
    if (parseInt(rawHour) >= 12) {
        return "pm"
    }
    if (parseInt(rawHour) < 12) {
        return "am"
    }
}

function constructDayOfTheWeek(rawDay) {
    let numDay = parseInt(rawDay);
    let listOfDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return(listOfDays[numDay])
}

function correctedMonth(rawMonth) {
    let numMonth = parseInt(rawMonth);
    let listOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return(listOfMonths[numMonth])
}

function constructMinutes(rawMinute) {
    let numMinute = parseInt(rawMinute);
    if (numMinute < 10) {
        return "0" + numMinute
    }
    return numMinute
}

function Dashboard(props) {

    const liveTime = props.liveTime;
    const rawHour = liveTime.getHours();
    const hour = correctHour(rawHour);
    const minute = constructMinutes(liveTime.getMinutes());
    const timeframe = correctTimeframe(rawHour);
    const dayOfTheWeek = constructDayOfTheWeek(liveTime.getDay());
    const month = correctedMonth(liveTime.getMonth());

    return (
        <div className={styles.dashboard}>
            <span className={styles["dashboard-header"]}>--- daily log ---</span>
            <div className={styles.time}>
                <span>{hour}</span>
                <span className={styles.colon}>:</span>
                <span>{minute}</span>
                <span>{timeframe}</span>
            </div>
            <span className={styles.date}>{dayOfTheWeek}, {month} {liveTime.getDate()}</span>
        </div>
    )
}

export default Dashboard;