import React , {useState} from 'react';

// MY CUSTOM UI COMPONENTs
import MainOverlay from "../UIComponents/MainOverlay/MainOverlay.jsx";
import OverlayTab from '../UIComponents/OverlayTab/OverlayTab.jsx';
import AddLogForm from './AddLogForm.jsx';

// CUSTOM STYLE FILES IMPORT
import styles from "./AddLog.module.css"

function AddLog(props) {

    // this is the only UI component that needs to be changed for each input question
    // therefore we will set everything else with regular javascript variablses so as to not refresh the ui component for unecessary useState changes

    const [inputTitle, setInputTitle] = useState("log title")

    function submitInputHandler() {
        
    }

    function submitLogHandler() {
        
    }

    return (
        <MainOverlay>
            <div className={styles["add-log-container"]}>
                <OverlayTab text="Add a Log" />
                <AddLogForm submitInputHandler={submitInputHandler} inputTitle={inputTitle} />
                <OverlayTab text="X" onClick={props.toggleAddLog} />
            </div>
        </MainOverlay>
    )
}

export default AddLog;