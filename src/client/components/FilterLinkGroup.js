import React from 'react';
import FilterLink from './FilterLink';

const FilterLinkGroup = ({filter, numOfActiveItems, onClick}) => {
    console.log("FilterLinkGroup filter is " + filter);
    return (
        <div>
           Show:
            {" "} 
            <FilterLink filter={filter} onClick={onClick}>
            All
            </FilterLink>
            {", "}
            <FilterLink filter={filter} onClick={onClick}>
            Active
            </FilterLink>
            {", "}
            <FilterLink filter={filter} onClick={onClick}>
            Completed
            </FilterLink>
            {"  (You have "} {numOfActiveItems} {" incompleted items)"}
        </div>
    );
};

export default FilterLinkGroup;