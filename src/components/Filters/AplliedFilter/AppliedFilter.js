import React from "react";
import classes from './appliedfilter.module.css'
import Button from "../../UI/Button/Button";
const AppliedFilter = (props) =>{
        return (
            Object.keys(props.values).length &&props.values[Object.keys(props.values)[0]].length ?
                <div className={classes.app_f_wrapper}>
                        <div className={classes.app_filter_txt}>
                                Applied Filters
                        </div>
                        <div className={classes.app_filter_btns}>
                                { Object.keys(props.values).map((el)=>(
                                    props.values[el].map((ele=>(
                                        <Button key={ele}>
                                                <span>{ele}</span>
                                                <span onClick={()=>props.onRemove(el,ele)} className={classes.app_filter_btn_x}>x</span>
                                        </Button>
                                    )))

                                ))}
                                <Button clicked={props.clearAll} classname="clear">Clear All</Button>
                        </div>
                </div>:null


        )

}

export default AppliedFilter;