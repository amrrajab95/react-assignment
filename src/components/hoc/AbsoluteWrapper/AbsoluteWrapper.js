import React from "react";
import classes from './AbsoluteWrapper.module.css';
const AbsoluteWrapper = (props)=>{
    const classesNames = props.classesNames.map((el)=>(classes[el]));
   return (
<div className={[classes.f_opts_wrapper,...classesNames].join(" ")}>
    {props.children}
</div>

)
}


export default AbsoluteWrapper;