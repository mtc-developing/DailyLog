import React from 'react';

//MY CUSTOM STYLE IMPORTS
import styles from './OverlayTab.module.css'

function OverlayTab(props) {
    
    return (
        <div className={styles["overlay-tab"]} onClick={props.onClick}>{props.text}</div>
    )
}

export default OverlayTab;