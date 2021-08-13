import React, {Component} from "react";
import Wrap from "../../components/hoc/Wrap/Wrap";
import AppliedFilter from "../../components/Filters/AplliedFilter/AppliedFilter";
import classes from './filtersbuilder.module.css'
import Filter from "../../components/Filters/Filter/Filter";
import FilterMobile from "../../components/Filters/Filter/FiltersMobile/FilterMobile";

class FiltersBuilder extends Component {

    state = {
        filters: {
            size: {
                options: [
                    {
                        id: "2x3",
                        title: "2' X 3'",
                    },
                    {
                        id: "3x5",
                        title: "3' X 5'",
                    },
                    {
                        id: "4x6",
                        title: "4' X 6'",
                    },
                    {
                        id: "5x8",
                        title: "5' X 8'",
                    },
                    {
                        id: "6x9",
                        title: "6' X 9'",
                    },
                    {
                        id: "8x10",
                        title: "8' X 10'",
                    },
                    {
                        id: "9x12",
                        title: "9' X 12'",
                    },
                    {
                        id: "10x14",
                        title: "10' X 14'",
                    },
                    {
                        id: "12x15",
                        title: "12' X 15'",
                    },
                    {
                        id: "runners",
                        title: "Runners",
                    },
                    {
                        id: "roundsovals&squares",
                        title: "Rounds, Ovals & Squares",
                    }
                ],
                isActive: false,
                applied: false,
                activeOpts: []
            },
            color: {
                options: [
                    {
                        id: "blue",
                        title: "Blue"
                    },
                    {
                        id: "black",
                        title: "Black"
                    },
                    {
                        id: "neutral",
                        title: "Neutral"
                    },
                    {
                        id: "orange",
                        title: "Orange"
                    },
                    {
                        id: "white",
                        title: "White"
                    },
                    {
                        id: "gray",
                        title: "Gray"
                    },
                    {
                        id: "red",
                        title: "Red"
                    },
                    {
                        id: "brown",
                        title: "Brown"
                    },
                    {
                        id: "multi",
                        title: "Multicolor",
                    },
                    {
                        id: "yellow",
                        title: "Yellow"
                    },
                    {
                        id: "green",
                        title: "Green"
                    },
                    {
                        id: "pink",
                        title: "Pink"
                    },
                    {
                        id: "purple",
                        title: "Purple"
                    },
                ],
                isActive: false,
                applied: false,
                activeOpts: []
            },
            room: {
                options: [
                    {
                        id: "bedroom",
                        title: "Bedroom"
                    },
                    {
                        id: "living room",
                        title: "Living Room"
                    },
                    {
                        id: "hallway",
                        title: "Hallway"
                    },
                    {
                        id: "kitchen",
                        title: "Kitchen"
                    },
                    {
                        id: "bathroom",
                        title: "Bathroom"
                    },
                    {
                        id: "kids",
                        title: "Kids"
                    },
                    {
                        id: "dining room",
                        title: "Dining Room"
                    },
                    {
                        id: "outdoor",
                        title: "Outdoor"
                    },
                    {
                        id: "office",
                        title: "Office"
                    },
                ],
                isActive: false,
                applied: false,
                activeOpts: []
            },
            price: {
                options: [
                    {
                        id: "from0to100",
                        title: "$0-100",
                    },
                    {
                        id: "from101to300",
                        title: "$101-300",
                    },
                    {
                        id: "from301to700",
                        title: "$301-700",
                    },
                    {
                        id: "from701",
                        title: "$701 & above",
                    },
                ],
                isActive: false,
                applied: false,
                activeOpts: []
            },
            material: {
                options: [
                    {
                        id: "synthetics",
                        title: "Synthetics"
                    },
                    {
                        id: "jute & natural fibers",
                        title: "Jute & Natural Fibers"
                    },
                    {
                        id: "wool",
                        title: "Wool",
                    },
                    {
                        id: "blends",
                        title: "Blends"
                    },
                    {
                        id: "cotton",
                        title: "Cotton"
                    },
                ],
                isActive: false,
                applied: false,
                activeOpts: []
            },
            construction: {
                options: [
                    {
                        id: "machine made",
                        title: "Machine Made"
                    },
                    {
                        id: "hand woven",
                        title: "Hand Woven"
                    },
                    {
                        id: "hand knotted",
                        title: "Hand Knotted"
                    },
                    {
                        id: "hand tufted",
                        title: "Hand Tufted"
                    },
                    {
                        id: "hand hooked",
                        title: "Hand Hooked"
                    },
                    {
                        id: "shag",
                        title: "Shag"
                    },
                    {
                        id: "dhurrie",
                        title: "Dhurrie"
                    },
                    {
                        id: "hand loomed",
                        title: "Hand Loomed"
                    },
                ],
                isActive: false,
                applied: false,
                activeOpts: []
            },
            style: {
                options: [
                    {
                        id: "casual",
                        title: "Casual"
                    },
                    {
                        id: "contemporary",
                        title: "Contemporary"
                    },
                    {
                        id: "southwestern",
                        title: "Southwestern"
                    },
                    {
                        id: "moroccan",
                        title: "Moroccan"
                    },
                    {
                        id: "transitional",
                        title: "Transitional"
                    },
                    {
                        id: "modern",
                        title: "Modern"
                    },
                    {
                        id: "shag",
                        title: "Shag"
                    },
                    {
                        id: "boho&bohemian",
                        title: "Boho/Bohemian"
                    },
                    {
                        id: "traditional",
                        title: "Traditional"
                    },
                    {
                        id: "vintage",
                        title: "Vintage"
                    },
                    {
                        id: "updated traditional",
                        title: "Updated Traditional"
                    },
                    {
                        id: "kilim&tribal",
                        title: "Kilim/Tribal"
                    }
                ],
                applied: false,
                isActive: false,
                activeOpts: []
            },

        },
        moreFilterClicked: false

    };
    filterOnClick = (filterType,isMobile=false) => {
        let updatedFilters = {...this.state.filters};
        const isActive = updatedFilters[filterType].applied ? true : !this.state.filters[filterType].isActive;

        if(!isMobile){
            this.changeAll(updatedFilters, ["isActive"], [false]);
            this.setState({moreFilterClicked: false});
        }
        updatedFilters[filterType].applied = false;

        updatedFilters[filterType].isActive = isActive;

        this.setState({filters: updatedFilters});
        console.log(this.state.filters)
    };
    changeAll = (obj, props = [], values = []) => {
        Object.keys(obj).forEach((ele) =>
            props.forEach((e, i) =>
                obj[ele][e] = values[i]
            )
        )
    }
    filterAddValue = (filterType, value) => {
        let updatedFilters = {...this.state.filters};
        if (!updatedFilters[filterType].activeOpts.includes(value)) {
            updatedFilters[filterType].activeOpts.push(value)
        } else {
            const index = updatedFilters[filterType].activeOpts.indexOf(value);
            updatedFilters[filterType].activeOpts.splice(index, 1)
        }
        this.setState({filters: updatedFilters});

    }
    filterRemoveValue = (filterType, value) => {
        let updatedFilters = {...this.state.filters};
        const index = updatedFilters[filterType].activeOpts.indexOf(value);
        updatedFilters[filterType].activeOpts.splice(index, 1)
        if (!updatedFilters[filterType].activeOpts.length) {
            updatedFilters[filterType].applied = false;
            updatedFilters[filterType].isActive = false;
        }
        this.setState({filters: updatedFilters});

    }
    cancel = (filterType) => {
        let updatedFilters = {...this.state.filters};
        updatedFilters[filterType].activeOpts = [];
        updatedFilters[filterType].applied = false;
        this.setState({filters: updatedFilters});

    }
    applyFilter = (filterType) => {
        let updatedFilters = {...this.state.filters};
        updatedFilters[filterType].applied = true;
        updatedFilters[filterType].active = false
        this.setState({filters: updatedFilters,moreFilterClicked:false});
    }
    clearAllHandler = () => {
        let updatedFilters = {...this.state.filters};
        this.changeAll(updatedFilters, ["isActive", "applied", "activeOpts"], [false, false, []]);
        this.setState({filters: updatedFilters});
    }
    moreFilterClicked = () => {
        let updatedFilters = {...this.state.filters};
        this.changeAll(updatedFilters, ["isActive"], [false]);
        return (
            this.setState((prevState) => {
                    return {...updatedFilters, moreFilterClicked: !prevState.moreFilterClicked}
                }
            )
        )


    }


    render() {
        const filtersState = this.state.filters;
        console.log(this.state.filters);
        const appliedFilters = Object.keys(filtersState).map((ele) => filtersState[ele].applied ? {[ele]: filtersState[ele].activeOpts} : {}).reduce((accObj, obj) => ({...accObj, ...obj}), {});
        return (
            <Wrap>
                <div className={classes.f_header}>
                    {

                        Object.keys(this.state.filters).map(
                            (filter) => <Filter filterOptionClick={this.filterAddValue}
                                                filterClicked={this.filterOnClick} name={filter} key={filter}
                                                isActive={this.state.filters[filter].isActive}
                                                isApplied={this.state.filters[filter].applied}
                                                options={this.state.filters[filter].options}
                                                activeOptions={this.state.filters[filter].activeOpts}
                                                onCancel={this.cancel}
                                                apply={this.applyFilter}

                            />
                        )
                    }
                    <FilterMobile isMoreFilterClicked={this.state.moreFilterClicked}
                                  moreClicked={this.moreFilterClicked} filters={this.state.filters}
                                  filterOptionClick={this.filterAddValue}
                                  filterClicked={this.filterOnClick}
                                  onCancel={this.cancel}
                                  apply={this.applyFilter}/>

                </div>
                <AppliedFilter onRemove={this.filterRemoveValue} clearAll={this.clearAllHandler}
                               values={appliedFilters}/>
            </Wrap>
        )

    }


}

export default FiltersBuilder;