import React , {useState} from 'react';

// MY CUSTOM UI COMPONENTs
import MainOverlay from "../UIComponents/MainOverlay/MainOverlay.jsx";
import OverlayTab from '../UIComponents/OverlayTab/OverlayTab.jsx';
import AddLogForm from './AddLogForm.jsx';
import NumForm from './NumForm.jsx';

// CUSTOM STYLE FILES IMPORT
import styles from "./AddLog.module.css"

// ATTEMPTING TO USE A VAR TO HOLD INMFORMATION FOR WHICH LOG FORM QUESTION WE ARE ON
const listOfTitleText = ["Enter a title for your log",  "What did this task require you to do", "What time did you start this task" , "What time did you finish this task"];
const listOfTitles = ["Log Title", "Description", "Start Time", "End Time"];

var listOfKeys = ["title", "description", "start_time", "end_time"];

const daysOfWeek = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function AddLog(props) {

    // this is the only UI component that needs to be changed for each input question
    // therefore we will set everything else with regular javascript variablses so as to not refresh the ui component for unecessary useState changes
    const [iteration, setIteration] = useState(0);

    const [logData, setLogData] = useState({});
    const liveTime = props.liveTime;
    const [numFormActive, setNumFormActive] = useState(false)

    const logDate = liveTime.toLocaleDateString();

    function submitInputHandler(text) {

        let key = "log_" + listOfKeys[iteration];

        if (!logData) {
            setLogData({key: text })
        }

        if (logData) {
            let rawData = logData
            rawData[key] = text
            setLogData(rawData)
        }

        if (iteration >= 1 && !numFormActive) {
            setNumFormActive(true)
        }
        
        setIteration(iteration + 1);

        if (iteration >= listOfKeys.length - 1) {
            // ADD THE DATE AT THE VERY END RIGHT HERE
            logData.log_date = logDate
            props.addLogHandler(logData)
            setLogData({})
       }
    };

    return (
        <MainOverlay>
            <div className={styles["add-log-container"]}>
                <OverlayTab text="Add a Log" />
                {/* Have 2 conditional statementss to handle which form we see */}
                {numFormActive && <NumForm submitInputHandler={submitInputHandler} inputTitle={listOfTitles[iteration]} inputTitleDescription={listOfTitleText[iteration]} testObjectUpdate={logData} />}
                {!numFormActive && <AddLogForm submitInputHandler={submitInputHandler} inputTitle={listOfTitles[iteration]} inputTitleDescription={listOfTitleText[iteration]} testObjectUpdate={logData} /> }
                
                <OverlayTab text="X" onClick={props.toggleAddLog} />
            </div>
        </MainOverlay>
    )
}

export default AddLog;