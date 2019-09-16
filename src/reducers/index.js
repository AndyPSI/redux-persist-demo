import { combineReducers } from "redux";
import countContainer from "./countContainer";
import testContainer from "./testContainer";

const reducers = {
  countContainer,
  testContainer
};

export { countContainer, testContainer };
