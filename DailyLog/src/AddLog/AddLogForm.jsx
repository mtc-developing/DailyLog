import React, { useState } from 'react'

// CUSTOM STYLE FILE IMPORTS
import styles from './AddLogForm.module.css'

function AddLogForm(props) {

    const [inputValue, setInputValue] = useState("")

    function inputValueHandler(e) {
        e.preventDefault();
        setInputValue(e.target.value);
    }

    function submitInputHandler() {
        if (!inputValue.length === 0) {
            props.submitInputHandler(inputValue);
        }
    }
    
    return (
                <form className={styles["add-log-body"]} onSubmit={submitInputHandler}>
                    <div className={styles["add-log-form-container"]}>
                        <label>{props.inputTitle}</label>
                        <input type="text" value={inputValue} onChange={inputValueHandler} />

                        <input type="submit" value="Submit" />
                    </div>
                </form>
    )
}

export default AddLogForm