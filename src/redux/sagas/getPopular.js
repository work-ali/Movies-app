import { put, takeLatest, call } from "redux-saga/effects";
import getPopularMovies from "../actions/getPopular";
import TYPES from "../types/index";

function* getPopular(action) {
    try {
        const data = yield call(getPopularMovies, action.page);
        if (!data.payload) {
            throw new Error("No data found");
        }
        yield put({
            type: TYPES.POPULAR_MOVIES.SUCCESS,
            payload: data.payload,
        });
    } catch (error) {
        yield put({ type: TYPES.POPULAR_MOVIES.FAILURE });
    }
}

export default function* getPopularSaga() {
    yield takeLatest(TYPES.POPULAR_MOVIES.REQUEST, getPopular);
}
