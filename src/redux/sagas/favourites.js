import { put, takeLatest, call } from "redux-saga/effects";
import toggleFavouriteMovie from "../actions/favourites";
import TYPES from "../types/index";

function* toggleFavourite(action) {
    try {
        const data = yield call(toggleFavouriteMovie, action.movie);
        if (!data.payload) {
            throw new Error("No data found");
        }
        yield put({
            type: TYPES.FAVOURITE.SUCCESS,
            payload: data.payload,
        });
    } catch (error) {
        yield put({ type: TYPES.FAVOURITE.FAILURE });
    }
}

export default function* toggleFavouriteSaga() {
    yield takeLatest(TYPES.FAVOURITE.TOGGLE, toggleFavourite);
}
