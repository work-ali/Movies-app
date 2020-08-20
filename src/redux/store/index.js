import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddlewear from "redux-saga";
import rootReducers from "../reducers";
import rootSagas from "../sagas";

const sagaMiddlewear = createSagaMiddlewear();

export const store = createStore(
  rootReducers,
  process.env.NODE_ENV === "production"
    ? applyMiddleware(sagaMiddlewear)
    : composeWithDevTools(applyMiddleware(sagaMiddlewear))
);

sagaMiddlewear.run(rootSagas);
