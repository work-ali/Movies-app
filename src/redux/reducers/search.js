import TYPES from "../types";

const initialState = {
  isLoading: false,
  searchTerm: "",
  searchResult: null,
  history: [],
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SEARCH.REQUEST:
      let searchHistory = [...state.history];
      searchHistory.push(action.searchTerm);
      return {
        ...state,
        isLoading: true,
        searchTerm: action.searchTerm,
        history: searchHistory,
      };
    case TYPES.SEARCH.SUCCESS:
      return {
        ...state,
        isLoading: false,
        searchResult: action.payload,
      };
    case TYPES.SEARCH.FAILURE:
      return {
        ...state,
        isLoading: false,
        searchResult: [],
      };
    default:
      return state;
  }
};

export default search;
