import React, { useState } from 'react'

// CLASS IMPORTS
import styles from './NumForm.module.css'

// Create a function for handling button presses and sending them to the already configured input handler

function NumForm(props) {

    const [time, setTime] = useState("")

    function clickHandler(value) {

        if (value === "submit") {
            // HERE WE NEED TO LIFT UP THE STATE
            props.submitInputHandler(time)
            value = "clear"
        }

        if (value === "clear") {
            setTime("")
        } else {
            setTime(time + value)
        }
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
            <div onClick={() =>clickHandler("clear")}>cl</div>
            <div onClick={() => clickHandler("submit")}>ADD</div>
            <div style={{"font-size": '1.6rem', border: 'none' , background:'none'}}>{props.inputTitle}</div>
            <div className={styles["time-display"]} style={{border: 'none' , background:'none'}}> {time} </div>
        </div>
    )
}

export default NumForm