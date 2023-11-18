import React from 'react';

// MY CUSTOM UI COMPONENTs
import MainOverlay from "../UIComponents/MainOverlay/MainOverlay.jsx"

// CUSTOM STYLE FILES IMPORT
import styles from "./AddLog.module.css"

function AddLog(props) {
    
    return (
        <MainOverlay>
            <div className={styles["add-log-container"]}>testing add log</div>
        </MainOverlay>
    )
}

export default AddLog;