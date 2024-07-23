import React, { useState } from 'react'

// CLASS IMPORTS
import styles from './NumForm.module.css'

// Create a function for handling button presses and sending them to the already configured input handler

function NumForm(props) {

    
    return (
        <form className={styles.NumForm} onSubmit={submitInputHandler}>
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

export default NumForm