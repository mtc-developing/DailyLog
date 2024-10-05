import React , {useState, useRef, useEffect} from 'react';

// CUSTOM UI COMPONENT IMPORTS
import MainOverlay from '../UIComponents/MainOverlay/MainOverlay.jsx';

// CUSTOM STLYE IMPORTS
import styles from './Settings.module.css';

const listOfDirections = ["If you struggle being productive with to-do lists, DailyLog aims to assist those who prefer an action first method that allows you to keep track of each would have been list item.", "Track the time it took to accomplish, see when you are at your most productive", 'Stay on task by refreshing your log, which will send an email summarizing what you accomplished', "log just so you can track your progress, and pat yourself on the back for your efforts", 'log so you can win a petty debate/argument with a friend or foe', 'log to document an incredible vacation, or an inspiring epiphony']

function Settings(props) {

    const [emailInput, setEmailInput] = useState(false)
    const [email, setEmail] = useState(localStorage.getItem("userEmail"));
    const [inputValue, setInputValue] = useState("")
    const [openingPage, setOpeningPage] = useState(true)
    const [directions, setDirections] = useState(false)
    const [directionsCount, setDirectionsCount] = useState(0)
    const [text, setText] = useState(listOfDirections[0])
    
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
        setText("When you refresh your logs, dailyLog will send an email to this address with your daily/weekly logs.")
    }
    function viewDirectionsHandler() {
        setOpeningPage(false);
        setDirections(true)
        if (emailInput) {
            setEmailInput(false)
        };
        setDirectionsCount(0)
        setText(listOfDirections[directionsCount])
        
    }
    function forceRefreshHandler() {
        setOpeningPage(false);
        if (emailInput) {
            setEmailInput(false);
        };
        setText("Forcing a refresh will send all of your current logs to your email address if provided, as well as remove these logs from your local storage. Continue?")
    }

    function buttonHandler() {
        if (directions && directionsCount >= listOfDirections.length-1) {
            setText(listOfDirections[0])
            setDirectionsCount(0)
            return
        }
        if (directions && directionsCount<=listOfDirections.length) {
            console.log(directionsCount)
            setText(listOfDirections[directionsCount + 1])
            setDirectionsCount(directionsCount + 1)
            return
        }
        if (emailInput) {
            localStorage.setItem("userEmail", inputValue);
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
                {emailInput && <div> <input type="text" onChange={inputValueHandler} ref={mainInput} className={styles.input}></input>{email && <span><p>current email on file:</p><p>{email || "none"}</p></span>}</div>}
                {!openingPage && <div className={styles.button} onClick={buttonHandler}>OK</div>}
            </div>
        </MainOverlay>
    )
}

export default Settings;