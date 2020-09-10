import * as actionTypes from './actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    if (actionTypes.ADD_PERSON === action.type) {
        return {
            persons: state.persons.concat({
                id: Math.random(),
                name: action.person.name,
                age: action.person.age
            })
        };
    }
    if (actionTypes.DELETE_PERSON === action.type) {
        return {
            persons: state.persons.filter(person => {
                return person.id !== action.id;
            })
        };
    }
    return state;
};

export default reducer;
