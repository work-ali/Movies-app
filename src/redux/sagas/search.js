import { put, takeLatest, call } from "redux-saga/effects";
import getSearchedMovie from "../actions/search";
import TYPES from "../types/index";

function* searchMovie(action) {
  try {
    const data = yield call(getSearchedMovie, action.searchTerm);
    if (!data.payload) {
      throw new Error("No data found");
    }
    yield put({
      type: TYPES.SEARCH.SUCCESS,
      payload: data.payload,
    });
  } catch (error) {
    yield put({ type: TYPES.SEARCH.FAILURE });
  }
}

export default function* searchMovieSaga() {
  yield takeLatest(TYPES.SEARCH.REQUEST, searchMovie);
}
