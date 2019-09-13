import * as types from "../constants/types";
import reduxState from "../constants/config";

export const resetStateAction = () => {
  return {
    type: types.RESET_STATE,
    payload: reduxState
  };
};
