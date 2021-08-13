import Filter from "./Filter/Filter";
import Wrap from "../hoc/Wrap/Wrap";
const Filters =(props)=>{

    return (
        <Wrap>
            {
                Object.keys(props.filters).map(
                    (filter)=><Filter filterClicked={props.clicked} name={filter} key={filter} isActive={props.filters[filter].isActive} options={props.filters[filter].options}/>
                )
            }

        </Wrap>

    )
}

export default Filters