import React , {useState, useRef, useEffect} from 'react';

// CUSTOM UI COMPONENT IMPORTS
import MainOverlay from '../UIComponents/MainOverlay/MainOverlay.jsx';

// CUSTOM STLYE IMPORTS
import styles from './Settings.module.css';

const TEXT_FILLERS = ["You come here often?", "Did it hurt?", "When you fell from heaven?", "JK you ugly as SHIT", "Hahaha ok enough fucking around...", "Seriously, go use the app", "GO USE THE APP!!", "THIS ISNT FUNNY ANYMORE", "You know what, you're going to regret this...", "ha", "hahaha....", "HAHAHAHAHAHAHAHAHA"]

var text = "What's up you sexy little bitch";
var textCount = 0;

function Settings(props) {

    const [emailInput, setEmailInput] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [openingPage, setOpeningPage] = useState(true)
    
    const mainInput = useRef(null)

    useEffect(() => {
        if (emailInput) {
            mainInput.current.focus() 
        }
    },[emailInput])

    function triggerIntroAnimationHandler() {
        if (emailInput) {
            setEmailInput(false)
        };
        props.introAnimation()
    }

    function toggleSettingsHandler() {
        if (emailInput) {
            setEmailInput(false)
        };
        props.toggleSettings()
    }
    
    function addEmailHandler() {
        setOpeningPage(false);
        setEmailInput(true);
        text = "When you refresh your logs, dailyLog will send an email to this address with your daily/weekly logs."
    }
    function viewDirectionsHandler() {
        setOpeningPage(false);
        if (emailInput) {
            setEmailInput(false)
        };
        text="If you struggle being productive with to-do lists, DailyLog aims to assist those who prefer an action first method that allows you to keep track of each would have been list item."
    }
    function forceRefreshHandler() {
        setOpeningPage(false);
        if (emailInput) {
            setEmailInput(false);
        };
        text="Forcing a refresh will send all of your current logs to your email address if provided, as well as remove these logs from your local storage. Continue?"
    }

    function buttonHandler() {
        if (openingPage) {
            console.log("opening page button activated")
            textCount=textCount + 1;
            text = TEXT_FILLERS[textCount];
            
            return
        };
        if (emailInput) {
            localStorage.setItem("userEmail", inputValue);
            console.log("daily log has saved your email: " + inputValue);
        };
    }

    function inputValueHandler(e) {
        setInputValue(e.target.value)
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
                {/* we will pout a conditional here for email input */}
                {emailInput && <input type="text" onChange={inputValueHandler} ref={mainInput} className={styles.input}></input>}
                <div className={styles.button} onClick={buttonHandler}>OK</div>
            </div>
        </MainOverlay>
    )
}

export default Settings;