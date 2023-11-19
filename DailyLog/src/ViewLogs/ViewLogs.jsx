import React from 'react';

// MY CUSTOM UI COMPONENT IMPORTS
import OverlayTab from '../UIComponents/OverlayTab/OverlayTab';
import LogCard from '../UIComponents/LogCard/LogCard';

// MY CUSTOM STYLE IMPORTS
import styles from "./ViewLogs.module.css";

function ViewLog(props) {
    
    return (

        <div className={styles["main-container"]}>
            <OverlayTab text="today" />
            <div className={styles.container}>
                <LogCard logCardCategory="home chores" logCardTitle="dishes" logCardDuration="45m" logCardStartTime="12:25pm" logCardEndTime="1:10pm" logCardDescription="I tend to do my dishes quite well, and now that I will only have to do my own, I am thrilled." />
                <LogCard logCardCategory="home chores" logCardTitle="dishes" logCardDuration="45m" logCardStartTime="12:25pm" logCardEndTime="1:10pm" logCardDescription="I tend to do my dishes quite well, and now that I will only have to do my own, I am thrilled." />
                <LogCard logCardCategory="home chores" logCardTitle="dishes" logCardDuration="45m" logCardStartTime="12:25pm" logCardEndTime="1:10pm" logCardDescription="I tend to do my dishes quite well, and now that I will only have to do my own, I am thrilled." />
                <LogCard logCardCategory="home chores" logCardTitle="dishes" logCardDuration="45m" logCardStartTime="12:25pm" logCardEndTime="1:10pm" logCardDescription="I tend to do my dishes quite well, and now that I will only have to do my own, I am thrilled." />
                <LogCard logCardCategory="home chores" logCardTitle="dishes" logCardDuration="45m" logCardStartTime="12:25pm" logCardEndTime="1:10pm" logCardDescription="I tend to do my dishes quite well, and now that I will only have to do my own, I am thrilled."/>
            </div>
            <OverlayTab text="X" onClick={props.toggleViewLogsOverlay} />
        
        </div>
    )
}

export default ViewLog