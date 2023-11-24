import React , {useState} from 'react';

// MY CUSTOM UI COMPONENTs
import MainOverlay from "../UIComponents/MainOverlay/MainOverlay.jsx";
import OverlayTab from '../UIComponents/OverlayTab/OverlayTab.jsx';
import AddLogForm from './AddLogForm.jsx';

// CUSTOM STYLE FILES IMPORT
import styles from "./AddLog.module.css"

// ATTEMPTING TO USE A VAR TO HOLD INMFORMATION FOR WHICH LOG FORM QUESTION WE ARE ON
const listOfTitleText = ["Enter a title for your log", "Is this log for keeping track of a tally? (ex: pushups, glasses of water, number of poops) or is it about a task you completed over a chunk of time (ex: dishes, groceries, pet-projects, yard-work)", "What did this task require you to do", "What time did you start this task" , "What time did you finish this task", "How many tallys would you like to add?"];
const listOfTitles = ["Log Title", "Log Type", "Log Description", "Log Start Time", "Log End Time", "Count"];

var listOfKeys= ["title", "type", "description", "start_time", "end_time", "count"];

function AddLog(props) {

    // this is the only UI component that needs to be changed for each input question
    // therefore we will set everything else with regular javascript variablses so as to not refresh the ui component for unecessary useState changes
    const [iteration, setIteration] = useState(0);

    const [logData, setLogData] = useState({
        log_title: "",
        log_type: "",
        log_description: "",
        log_start_time: "",
        log_end_time: "",
        log_count: 0
    })

    function submitInputHandler(text) {

        // SET UP THE COMMON PREFIXES AUTOMATICALLY PER THE ITERATION
        let commonText = "log_";
        let i = parseInt(iteration);
        let rawKey = listOfKeys[i];
        let key = commonText + rawKey;
        // 1) STORE INFORMATION IN CORRECT OBJECT KEY PER REACT  STANDAREDS
        setLogData({ ...logData, key: text } )
        // 2) UPDATE ITERATION TO CHANGE INFORMATION THAT APPEARS ON THE FORM
        setIteration(i+1)

        console.log(logData)
       
    }

    // BE SMART ABOUT WHEN TO IMPLEMENT SUBMITTING THE LOG

    function submitLogHandler() {
        
    }

    return (
        <MainOverlay>
            <div className={styles["add-log-container"]}>
                <OverlayTab text="Add a Log" />
                <AddLogForm submitInputHandler={submitInputHandler} inputTitle={listOfTitles[iteration]} inputTitleDescription={listOfTitleText[iteration]} />
                <OverlayTab text="X" onClick={props.toggleAddLog} />
            </div>
        </MainOverlay>
    )
}

export default AddLog;