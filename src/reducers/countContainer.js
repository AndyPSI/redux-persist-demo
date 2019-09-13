import _ from "lodash";
import reduxState from "../constants/config";
import * as types from "../constants/types";

export default function(state = reduxState.countContainer, action) {
  switch (action.type) {
    case types.INCREASE_VALUE:
      return { ...state, count: state.count + action.payload };
    case types.DECREASE_VALUE:
      return { ...state, count: state.count - action.payload };
    case types.RESET_STATE:
      return reduxState.countContainer;
    default:
      return state;
  }
}
