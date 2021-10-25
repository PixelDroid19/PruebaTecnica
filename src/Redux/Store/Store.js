import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { DataReducer, DetailsReducer, UserReducer } from "../Reducer/DataReducer";
import { LoginReducer, RegisterReducer } from "../Reducer/LoginAndRegister";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  Datos: DataReducer,
  Details: DetailsReducer,
  User: UserReducer,
  Login: LoginReducer,
  Register: RegisterReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
