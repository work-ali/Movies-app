import { put, takeLatest, call } from "redux-saga/effects";
import getMovies from "../actions/movie";
import TYPES from "../types/index";

function* getMovie(action) {
    try {
        const data = yield call(getMovies, action.id);
        if (!data.payload) {
            throw new Error("No data found");
        }
        yield put({
            type: TYPES.MOVIE.SUCCESS,
            payload: data.payload,
        });
    } catch (error) {
        yield put({ type: TYPES.MOVIE.FAILURE });
    }
}

export default function* getPopularSaga() {
    yield takeLatest(TYPES.MOVIE.REQUEST, getMovie);
}
