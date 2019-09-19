import countContainer from "./countContainer";
import testContainer from "./testContainer";

import { combineReducers } from "redux";
import reduxState from "../constants/config";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import _ from "lodash";

const rootConfig = {
  key: "root",
  storage: storage,
  migrate: state => {
    return Promise.resolve(_.merge(reduxState, state));
  }
};

const rootReducer = combineReducers({
  countContainer: persistReducer(rootConfig, countContainer),
  testContainer: testContainer
});

export default rootReducer;
