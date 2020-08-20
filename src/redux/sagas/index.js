import { all } from "redux-saga/effects";
import searchMovieSaga from "./search";
import getPopularSaga from "./getPopular";
import getTopSaga from "./topMovies";
import getNowPlayingSaga from './nowPlaying';
import favouritesSaga from './favourites'
import movieSaga from './movie'

export default function* rootSagas() {
  yield all([
    searchMovieSaga(),
    getPopularSaga(),
    getTopSaga(),
    getNowPlayingSaga(),
    favouritesSaga(),
    movieSaga(),
  ]);
}
