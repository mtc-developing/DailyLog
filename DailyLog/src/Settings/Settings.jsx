import React from 'react';

// CUSTOM UI COMPONENT IMPORTS
import MainOverlay from '../UIComponents/MainOverlay/MainOverlay.jsx';

// CUSTOM STLYE IMPORTS
import styles from './Settings.module.css';

function Settings(props) {
    return (
        <MainOverlay>
            <div className={styles.settings}>
                <span>WEATHER</span>
                <span>TUTORIAL</span>
                <span>ABOUT ME</span>
                <span>REFRESH</span>
                <span onClick={props.toggleSettings}>QUIT</span>
            </div>
        </MainOverlay>
    )
}

export default Settings;