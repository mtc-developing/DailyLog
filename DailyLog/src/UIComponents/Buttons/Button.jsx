import React from 'react';


// style imports
import styles from './Button.module.css';

function randomizeKey() {

    let num = Math.random() * Math.random() ** Math.random()
    
    return(num)
}

function Button(props) {
    
    return (
        <button className={styles.button} onClick={props.onClick} key={randomizeKey()}>{props.name}</button>
    )

}

export default Button