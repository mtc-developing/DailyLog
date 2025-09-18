import React from 'react';

// MY CUSTOM UI STYLE IMPORTS
import styles from './MainOverlay.module.css';

function MainOverlay(props){

    return (
        <div className={styles["main-overlay"]}>
            {props.children}
        </div>
    )
}

export default MainOverlay;