import * as types from "../constants/types";

export const testIncrement = x => {
  return {
    type: types.TEST_INCREASE_VALUE,
    payload: x
  };
};

export const testDecrement = x => {
  return {
    type: types.TEST_DECREASE_VALUE,
    payload: x
  };
};
