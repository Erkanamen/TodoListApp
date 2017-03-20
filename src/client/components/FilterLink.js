import React, {PropTypes} from 'react';
import setFilter from '../actions/TodoAppActions';

const FilterLink = ({children, filter, onClick}) => {
   
    console.log("filter is " + filter + " children is " + children);

    if(filter === children) {
        return <span>{children}</span>;
    }

    return (
        <a 
        href="#"
        onClick = {e => {
            e.preventDefault();
            onClick(children);
        }}
        >
        {children}
        </a>
    );
};

FilterLink.propTypes = {
    filter: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick:PropTypes.func.isRequired
}

export default FilterLink;