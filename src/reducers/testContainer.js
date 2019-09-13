import _ from "lodash";
import reduxState from "../constants/config";
import * as types from "../constants/types";

export default function(state = reduxState.testContainer, action) {
  switch (action.type) {
    case types.TEST_INCREASE_VALUE:
      return { ...state, count: state.count + action.payload };
    case types.TEST_DECREASE_VALUE:
      return { ...state, count: state.count - action.payload };
    case types.RESET_STATE:
      return reduxState.testContainer;
    default:
      return state;
  }
}
