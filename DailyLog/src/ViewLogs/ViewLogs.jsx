import React , {useState} from 'react';

// MY CUSTOM UI COMPONENT IMPORTS
import OverlayTab from '../UIComponents/OverlayTab/OverlayTab';
import LogCard from '../UIComponents/LogCard/LogCard';
import MainOverlay from "../UIComponents/MainOverlay/MainOverlay"

// MY CUSTOM STYLE IMPORTS
import styles from "./ViewLogs.module.css";

function keyFinder() {
        return (Math.random(1)*Math.random(1)*Math.random(1))
    }

function ViewLogs(props) {

    const logListTest=props.logList
    const [activeLogList, setActiveLogList] = useState( () => {
     return(logListTest.length>=1)
 })
    // const listOfLogTasks = props.logList
    // const testObjectArray = DUMMY_LIST_OF_LOGS.filter((log) => log.log_type == "task")

    const myLogObjectArray = logListTest.map((log) => {
        return (
            <LogCard key={keyFinder()} logCardCategory={log.log_type} logCardTitle={log.log_title} logCardDuration={"45m"} logCardStartTime={log.log_start_time} logCardEndTime={log.log_end_time} logCardDescription={log.log_description} />
        )
    })

    return (


        <MainOverlay>
            <div className={styles["main-container"]}>
                <OverlayTab text="today" />
                {!activeLogList && (<div className={styles.container}>
                    {testObjectArray}
                    </div>)}
                {activeLogList && (<div className={styles.container}>
                    {myLogObjectArray}
                </div>)}
                <OverlayTab text="X" onClick={props.toggleViewLogsOverlay} />
        
            </div>
        </MainOverlay>
    )
}

export default ViewLogs;