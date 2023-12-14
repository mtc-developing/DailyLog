import React, { useState ,useEffect, useRef } from 'react'

// CUSTOM STYLE FILE IMPORTS
import styles from './AddLogForm.module.css'

function AddLogForm(props) {

    const [inputValue, setInputValue] = useState("")

    const mainInput = useRef(null)

    useEffect(() => {
       mainInput.current.focus() 
    },[props.inputTitle])

    function inputValueHandler(e) {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    function submitInputHandler(e) {
    
        if (inputValue) {
            e.preventDefault();
            props.submitInputHandler(inputValue);
        }
        e.preventDefault()
        setInputValue("")
    }
    
    return (
                <form className={styles["add-log-body"]} onSubmit={submitInputHandler}>
                    <div className={styles["add-log-form-container"]}>
                <label>{props.inputTitle}</label>
                <span className={styles.description}>"{props.inputTitleDescription}"</span>
                <input className={styles["text-input"]} type="text" value={inputValue} onChange={inputValueHandler} ref={mainInput} />
                        <input type="submit" value="Submit" onClick={submitInputHandler} className={styles.button} />
            </div>
                </form>
    )
}

export default AddLogForm