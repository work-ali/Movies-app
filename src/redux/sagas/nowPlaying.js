import { put, takeLatest, call } from "redux-saga/effects";
import getNowPlaying from "../actions/getNowPlaying";
import TYPES from "../types/index";

function* getNow(action) {
    try {
        const data = yield call(getNowPlaying, action.page);
        if (!data.payload) {
            throw new Error("No data found");
        }
        yield put({
            type: TYPES.NOW_PLAYING.SUCCESS,
            payload: data.payload,
        });
    } catch (error) {
        yield put({ type: TYPES.NOW_PLAYING.FAILURE });
    }
}

export default function* getTopSaga() {
    yield takeLatest(TYPES.NOW_PLAYING.REQUEST, getNow);
}
