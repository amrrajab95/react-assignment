import Wrap from "../../hoc/Wrap/Wrap";
import FilterOptions from "../FilterOptions/FilterOptions";
import Button from "../../UI/Button/Button";
import classes from './filter.module.css'
const Filter = (props)=>
    {
    const classesName=[classes.filter,props.isActive?classes.active:"",props.isApplied?classes.applied:""];
return (
    <div className={classesName.join(" ")}>
            <Button active={props.isActive||props.isApplied?"active":""} clicked={()=>props.filterClicked(props.name)}>{`${props.name} ${props.isApplied?(`(${props.activeOptions.length})`):''}`}</Button>

         <FilterOptions addNewValue={props.filterOptionClick} active={props.isActive?"active":""} options={props.options} filterType={props.name} activeOptions={props.activeOptions} canceled={props.onCancel} isApplied={props.isApplied} applied={props.apply}/>

    </div>
)
    }



export default Filter;