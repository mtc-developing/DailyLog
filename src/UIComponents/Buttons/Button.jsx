import React, { useState, useEffect } from 'react';

// REACT ICONS
import { BiCalendarPlus } from "react-icons/bi";
import { BiDotsVertical } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";

// style imports
import styles from './Button.module.css';

function randomizeKey() {

    let num = Math.random() * Math.random() ** Math.random()
    
    return(num)
}

function Button(props) {

    const [icon, setIcon] = useState(null)
    
    useEffect(() => {
        if (props.iconNum === 1) {
            setIcon(<BiCalendarPlus className={styles.icon} />)
        }
        if (props.iconNum === 2) {
            setIcon(<BiSearchAlt className={styles.icon} />)
        }
        if (props.iconNum === 3) {
            setIcon(<BiDotsVertical className={styles.icon}  />)
        }
    }, [] )
    return (
        <button className={styles.button} onClick={props.onClick} key={randomizeKey()}>
            <span>{props.name}</span> 
            {icon}
        </button>
    )

}

export default Button