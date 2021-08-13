import FilterOptions from "../../FilterOptions/FilterOptions";
import FilterOptionsMobile from "../../FilterOptions/FilterOptionsMobile";
import Button from "../../../UI/Button/Button";
import classes from '../filter.module.css'
import AbsoluteWrapper from "../../../hoc/AbsoluteWrapper/AbsoluteWrapper";
import SlideDown from "../../../UI/SlideDown/SlideDown";

const Filter = (props) => {

    const classesName = [classes.filter, props.isMoreFilterClicked ? classes.active : ""];
    const filterKeys=Object.keys(props.filters);
     filterKeys.splice(0, 2);
    let filtersObj = {};
    filterKeys.map((key) => {

        filtersObj[key] = props.filters[key]
    }

)
    const filtersMobValuesSum=  Object.keys(filtersObj).filter((filter)=>(props.filters[filter].applied)).map((item)=>props.filters[item].activeOpts.length).reduce((accSum,el)=>(accSum+el),0);


    return (
        <div className={classesName.join(" ")}>
            <Button active={props.isMoreFilterClicked ? "active" : ""} clicked={() => props.moreClicked()}>More
                Filters {filtersMobValuesSum?`(${filtersMobValuesSum})`:""}</Button>

            <AbsoluteWrapper classesNames={[props.isMoreFilterClicked ? "f_opts_wrapper_active" : ""]}>
                {

                    Object.keys(filtersObj).map((filter)=>(

                          <SlideDown key={filter}
                                     name={`${filter} ${props.filters[filter].applied?(`(${props.filters[filter].activeOpts.length})`):''}`}
                                     isActive={props.filters[filter].isActive?"active":""}
                                     clicked={()=>props.filterClicked(filter,true)}
                                    content={
                                        <FilterOptionsMobile addNewValue={props.filterOptionClick} active={props.filters[filter].isActive?"active":""} options={props.filters[filter].options} filterType={filter} activeOptions={props.filters[filter].activeOpts} canceled={props.onCancel} isApplied={props.isApplied} applied={props.apply}/>

                                    }
                        />
                    ))

                    }
            </AbsoluteWrapper>
        </div>
    )
}


export default Filter;