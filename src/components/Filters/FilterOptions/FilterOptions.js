import React from "react";
import classes from './filteroptions.module.css'
import Button from "../../UI/Button/Button";
import AbsoluteWrapper from "../../hoc/AbsoluteWrapper/AbsoluteWrapper";
const FilterOptions = (props) => {
    const options = props.options.length ? props.options.map((option) => (
        <div key={option.id} className={classes.btn_wrapper}>
            <Button active={props.activeOptions.includes(option.id)?"active":""} clicked={()=>props.addNewValue(props.filterType,option.id)} key={option.id} value={option.id} >{option.title}</Button>
        </div>

        )
    ) : null

        const classesName=[props.active && !props.isApplied?"f_opts_wrapper_active":""]
    return (
         <AbsoluteWrapper classesNames={classesName}>
            <div className={classes.f_opts}>
                {options}
            </div>
            <div className={classes.f_opts_footer}>
                {props.activeOptions.length?<Button clicked={()=>props.canceled(props.filterType)}>cancel</Button>:null}
                <Button  disabled={!props.activeOptions.length} clicked={()=>props.applied(props.filterType)} classname="apply">Apply</Button>
            </div>
        </AbsoluteWrapper>

    )
}


export default FilterOptions;