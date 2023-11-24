import React, { useState } from 'react'

// CUSTOM STYLE FILE IMPORTS
import styles from './AddLogForm.module.css'

function AddLogForm(props) {

    const [inputValue, setInputValue] = useState(undefined)

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
    }
    
    return (
                <form className={styles["add-log-body"]} onSubmit={submitInputHandler}>
                    <div className={styles["add-log-form-container"]}>
                <label>{props.inputTitle}</label>
                <span className={styles.description}>"{props.inputTitleDescription}"</span>
                        <input className={styles["text-input"]} type="text" onChange={inputValueHandler} />

                        <input type="submit" value="Submit" />
                    </div>
                </form>
    )
}

export default AddLogForm