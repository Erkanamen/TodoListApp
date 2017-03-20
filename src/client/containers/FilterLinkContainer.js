import { connect } from 'react-redux';
import FilterLinkGroup from '../components/FilterLinkGroup';
import {setFilter} from '../actions/TodoAppActions';

const mapStateToProps = (state, ownProps) => {
    return {
        filter: state.filterGroup.filter,
        numOfActiveItems: state.todoList.todos.filter(t => !t.completed).length
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (f) => dispatch(setFilter(f))
    }
}

const FilterLinkContainer = connect(mapStateToProps, mapDispatchToProps)(FilterLinkGroup);

export default FilterLinkContainer;