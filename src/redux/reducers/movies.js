import TYPES from "../types";

const initialState = {
    isLoading: false,
    isFetching: false,
    popular: [],
    top: [],
    nowPlaying: [],
    selected: null
};

const movies = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.POPULAR_MOVIES.REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case TYPES.TOP_MOVIES.REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case TYPES.POPULAR_MOVIES.SUCCESS:
            return {
                ...state,
                isLoading: false,
                popular: action.payload,
            };
        case TYPES.TOP_MOVIES.SUCCESS:
            return {
                ...state,
                isLoading: false,
                top: action.payload,
            };
        case TYPES.NOW_PLAYING.REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case TYPES.NOW_PLAYING.SUCCESS:
            return {
                ...state,
                isLoading: false,
                nowPlaying: action.payload,
            };
        case TYPES.POPULAR_MOVIES.FAILURE:
            return {
                ...state,
                isLoading: false,
                popular: [],
            };
        case TYPES.MOVIE.REQUEST:
            return {
                ...state,
                isFetching: true,
            };
        case TYPES.MOVIE.SUCCESS:
            return {
                ...state,
                isFetching: false,
                selected: action.payload,
            };
        default:
            return state;
    }
};

export default movies;
