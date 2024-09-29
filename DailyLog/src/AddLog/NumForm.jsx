import React, { useState } from 'react'

// CLASS IMPORTS
import styles from './NumForm.module.css'

// Create a function for handling button presses and sending them to the already configured input handler

function NumForm(props) {

    const [time, setTime] = useState("4:20pm")

    function clickHandler(value) {
        setTime(value)
    }
    
    return (
        <div className={styles.NumForm}>
            <div onClick={() =>clickHandler("0")}>0</div>
            <div onClick={() =>clickHandler("1")}>1</div>
            <div onClick={() =>clickHandler("2")}>2</div>
            <div onClick={() =>clickHandler("3")}>3</div>
            <div onClick={() =>clickHandler("4")}>4</div>
            <div onClick={() =>clickHandler("5")}>5</div>
            <div onClick={() =>clickHandler("6")}>6</div>
            <div onClick={() =>clickHandler("7")}>7</div>
            <div onClick={() =>clickHandler("8")}>8</div>
            <div onClick={() =>clickHandler("9")}>9</div>
            <div onClick={() =>clickHandler("am")}>AM</div>
            <div onClick={() =>clickHandler("pm")}>PM</div>
            <div onClick={() =>clickHandler(":")}>:</div>
            <div onClick={() =>clickHandler("")}>cl</div>
            <div onClick={() =>clickHandler("add")}>ADD</div>
            <div value="" className={styles["time-display"]}> {time} </div>
        </div>
    )
}

export default NumForm