import React from "react";
import classes from'./SlideDown.module.css'
const SlideDown = (props)=>{
    return(
        <div className={classes.s_dn_wrapper}>
            <div className={classes.s_dn_header}>
                <div>{props.name}</div>
                <div className={classes.s_dn_toggle} onClick={props.clicked}>{props.isActive?"-":"+"}</div>
            </div>
            {
                props.isActive?  <div className={classes.s_dn_content}>
                    {props.content}
                </div>:null
            }

        </div>
    )
}

export default SlideDown;