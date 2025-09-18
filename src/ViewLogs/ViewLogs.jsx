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

    function deleteLogHandler(log) {
        props.deleteLog(log)
    }

    const logListTest = props.logList
    
    const morningList = logListTest.filter(log => log.log_start_time.includes("am"));
    const nightList = logListTest.filter(log => log.log_start_time.includes("pm"));

    const noonList = nightList.filter(log => log.log_start_time[0] == "1" && log.log_start_time[1] == "2" && log.log_start_time[2] == ":");

    const afternoonList = nightList.filter(log => log.log_start_time[0] != "1" && log.log_start_time[1] != "2" && log.log_start_time[2] != ":")

    const adjustedNoonList = noonList.sort((a,b) => a.log_start_time - b.log_start_time)

    const adjustedMorningList = morningList.sort((a, b) => a.log_start_time - b.log_start_time);
    const adjustedNightList = afternoonList.sort((a, b) => a.log_start_time - b.log_start_time);

    const almostFinalLogList = adjustedMorningList.concat(adjustedNoonList)
    const preFinalLogList = almostFinalLogList.concat(adjustedNightList)

    const finalLogList = preFinalLogList.sort((a,b) => a.log_date - b.log_date)

    const myLogObjectArray = finalLogList.map((log) => {
        return (
            <LogCard key={keyFinder()} logDate={log.log_date} logCardTitle={log.log_title} logCardDuration={"45m"} logCardStartTime={log.log_start_time} logCardEndTime={log.log_end_time} logCardDescription={log.log_description} deleteLog={deleteLogHandler} />
        )
    })

    return (


        <MainOverlay>
            <div className={styles["main-container"]}>
                <OverlayTab text="close" onClick={props.toggleViewLogsOverlay} />
                <div className={styles.container}>
                    {props.logList.length===0 && <span>You have not logged anything today</span>}
                    {myLogObjectArray}
                </div>
                <OverlayTab text="your logs" />
        
            </div>
        </MainOverlay>
    )
}

export default ViewLogs;