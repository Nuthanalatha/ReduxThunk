import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { userReducer } from "./redux/reducers/UserReducer";

const rootReducer = combineReducers({
  userList: userReducer,
});
const middleware = [thunk];
const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
