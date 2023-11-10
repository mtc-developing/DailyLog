import React from 'react';


// style imports
import styles from './Button.module.css';

//  BE SURE TO INCLUDE A RANDOM KEY GENERATOR, EITHER HERE OR IN THE PARENT ELEMENT?
function Button(props) {
    
    return (
        <button className={styles.button} onClick={props.onClick}>{props.name}</button>
    )

}

export default Button