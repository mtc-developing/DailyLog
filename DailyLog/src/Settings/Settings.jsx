import React , {useState} from 'react';

// CUSTOM UI COMPONENT IMPORTS
import MainOverlay from '../UIComponents/MainOverlay/MainOverlay.jsx';

// CUSTOM STLYE IMPORTS
import styles from './Settings.module.css';

const TEXT_FILLERS = [""]

function Settings(props) {

    const [text, setText] = useState("What's up you sexy little bitch")

    function triggerIntroAnimationHandler() {
        props.introAnimation()
    }

    function toggleSettingsHandler() {
        props.toggleSettings()
    }
    
    function addEmailHandler() {
        setText("When you refresh your logs, dailyLog will send an email to this address with your daily/weekly logs.")
    }
    function viewDirectionsHandler() {
        setText("If you struggle being productive with to-do lists, DailyLog aims to assist those who prefer an action first method that allows you to keep track of each would have been list item.")
    }
    function forceRefreshHandler() {
        setText("Forcing a refresh will send all of your current logs to your email address if provided, as well as remove these logs from your local storage. Continue?")
    }

    return (
        <MainOverlay>
            <div className={styles.settings}>
                <span onClick={addEmailHandler}>ADD EMAIL</span>
                <span onClick={viewDirectionsHandler}>DIRECTIONS</span>
                <span onClick={forceRefreshHandler}>FORCE REFRESH</span>
                <span onClick={triggerIntroAnimationHandler}>INTRO ANIMATION</span>
                <span onClick={toggleSettingsHandler}>CLOSE</span>
            </div>
            <div className={styles.text}>
                <div>{text}</div>
                <div className={styles.button}>OK</div>
            </div>
        </MainOverlay>
    )
}

export default Settings;