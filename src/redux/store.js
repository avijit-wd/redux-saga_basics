import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./userReducer/users";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../redux/sagas/rootSaga";

const reducer = combineReducers({
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
