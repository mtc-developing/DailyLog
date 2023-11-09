import React from 'react';

import styles from "./Dashboard.module.css";

function Dashboard() {

    return (
        <div className={styles.dashboard}>
            <p>Testing Dashboard</p>
            <span className={styles.time}>
                <span>8</span>
                <span className={styles.colon}>:</span>
                <span>34</span>
                <span>pm</span>
            </span>
            <p>Monday</p>
        </div>
    )
}

export default Dashboard;