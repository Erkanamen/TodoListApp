const filterGroupInitialState = {
    filter: "All"
};

export const filterGroup = (state = filterGroupInitialState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                filter: action.filter
            };
        default:
            return state;
    }
}