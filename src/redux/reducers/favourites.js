import TYPES from "../types";

let list = JSON.parse(localStorage.getItem('favourites'))

const initialState = {
    list: list || []
};

const favourites = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FAVOURITE.TOGGLE:
            return {
                ...state,
            };
        case TYPES.FAVOURITE.SUCCESS:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
};

export default favourites;
