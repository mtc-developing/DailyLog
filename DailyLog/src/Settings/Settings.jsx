import React from 'react';

// CUSTOM UI COMPONENT IMPORTS
import MainOverlay from '../UIComponents/MainOverlay/MainOverlay.jsx';

// CUSTOM STLYE IMPORTS
import styles from './Settings.module.css';

function Settings(props) {

    function triggerIntroAnimationHandler() {
        props.introAnimation()
    }

    return (
        <MainOverlay>
            <div className={styles.settings}>
                <span>WEATHER</span>
                <span>TUTORIAL</span>
                <span onClick={triggerIntroAnimationHandler}>INTRO ANIMATION</span>
                <span>REFRESH</span>
                <span onClick={props.toggleSettings}>CLOSE</span>
            </div>
            <div className={styles.text}>
                <div>"This si where I will provide the information for any options that ned explaining or a call to action button"</div>
                <div>BUTTON</div>
            </div>
        </MainOverlay>
    )
}

export default Settings;