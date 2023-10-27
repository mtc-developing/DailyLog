import React from "react";

import styles from "./Title.module.css"

const space = "poop";

function Title(props) {
    return (
        <div className={styles["title-container"]}>
            <div className={styles["main-title-container"]}>
                <span className={styles.span}>D</span>
                <span className={styles.span}>A</span>
                <span className={styles.span}>I</span>
                <span className={styles.span}>L</span>
                <span className={styles.span}>Y</span>
                <span className={styles.span}></span>
                <span className={styles.span}>L</span>
                <span className={styles.span}>O</span>
                <span className={styles.span}>G</span>
            </div>
            <h2>a moble app by Cain Creative</h2>
        </div>
    )
}

export default Title