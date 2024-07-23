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

    // we need to change the whole premise of this coponent in order to be able
    // to change the input style to acomodate for our startv end time uopdated needs
    
    return (
                <form className={styles["add-log-body"]} onSubmit={submitInputHandler}>
                    <div className={styles["add-log-form-container"]}>
                    <label>{props.inputTitle}</label>
                    <span className={styles.description}>"{props.inputTitleDescription}"</span>

                    {/* THIS IS THE COMPONENT SECTION FOR EL;EMENTS THAT WILL CHANGE DEPOENDING ON USER-STATE */}
                    <input className={styles["text-input"]} type="text" value={inputValue} onChange={inputValueHandler} ref={mainInput} />
                            <input type="submit" value="Submit" onClick={submitInputHandler} className={styles.button} />
                    </div>
                </form>
    )
}

export default AddLogForm