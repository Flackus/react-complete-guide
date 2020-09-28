import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: Date.now().toString(),
                    value: action.result
                })
            };
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(el => el.id !== action.id);
            return {
                ...state,
                results: updatedArray
            };
        default:
            return state;
    }
};

export default reducer;
