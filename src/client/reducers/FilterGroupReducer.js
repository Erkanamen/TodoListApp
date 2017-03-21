export const filterGroup = (state, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                filter: action.filter
            };
        default:
            return state;
    }
}