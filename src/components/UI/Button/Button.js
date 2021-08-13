import React from "react";
import classes from './Button.module.css'

const Button = (props)=>{
        return(
                <button disabled={props.disabled} value={props.value} onClick={props.clicked} className={[classes.Button,classes[props.active],classes[props.classname]].join(' ')}>
                {props.children}
            </button>
        )
    }
;

export default Button;