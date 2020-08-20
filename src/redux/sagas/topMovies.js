import { put, takeLatest, call } from "redux-saga/effects";
import getTopMovies from "../actions/getPopular";
import TYPES from "../types/index";

function* getTop(action) {
    try {
        const data = yield call(getTopMovies, action.page);
        if (!data.payload) {
            throw new Error("No data found");
        }
        yield put({
            type: TYPES.TOP_MOVIES.SUCCESS,
            payload: data.payload,
        });
    } catch (error) {
        yield put({ type: TYPES.TOP_MOVIES.FAILURE });
    }
}

export default function* getTopSaga() {
    yield takeLatest(TYPES.TOP_MOVIES.REQUEST, getTop);
}
