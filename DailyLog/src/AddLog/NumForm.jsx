import React, { useState } from 'react'

// CLASS IMPORTS
import styles from './NumForm.module.css'

// Create a function for handling button presses and sending them to the already configured input handler

function NumForm(props) {

    const [time, setTime] = useState("")
    
    return (
        <div className={styles.NumForm}>
            <div>0</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>AM</div>
            <div>PM</div>
            <div>clear</div>
        </div>
    )
}

export default NumForm