import React from 'react';

import styles from "./Dashboard.module.css";

function Dashboard() {

    return (
        <div className={styles.dashboard}>
            <span classname={styles["dashboard-header"]}>daily log</span>
            <div className={styles.time}>
                <span>8</span>
                <span className={styles.colon}>:</span>
                <span>34</span>
                <span>pm</span>
            </div>
            <span className={styles.date}>monday, april 22nd</span>
        </div>
    )
}

export default Dashboard;