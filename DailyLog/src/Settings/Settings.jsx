import React from 'react';

// CUSTOM STLYE IMPORTS
import styles from './Settings.module.css';

function Settings(props) {
    return (
        <div className={styles["main-container"]}>
            <div className={styles.blur}>
                <span className={styles.x} onClick={props.toggleSettings}>X</span>
            </div>
            <div className={styles.settings}>
                <span>WEATHER</span>
                <span>TUTORIAL</span>
                <span>ABOUT ME</span>
                <span>REFRESH</span>
                <span>QUIT</span>
            </div>
        </div>
    )
}

export default Settings;