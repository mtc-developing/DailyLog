import React from "react";

import MyBrand from "./MyBrand";

import styles from "./Title.module.css"

function Title(props) {
    return (
        <div className={styles["title-container"]}>
            <div className={styles["main-title-container"]}>
                <span className={styles.span}>D</span>
                <span className={styles.span}>a</span>
                <span className={styles.span}>i</span>
                <span className={styles.span}>l</span>
                <span className={styles.span}>y</span>
                <span className={styles.span}>L</span>
                <span className={styles.span}>o</span>
                <span className={styles.span}>g</span>
            </div>
            <MyBrand className />
        </div>
    )
}

export default Title