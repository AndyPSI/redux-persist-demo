import * as types from "../constants/types";

export const increment = x => {
  return {
    type: types.INCREASE_VALUE,
    payload: x
  };
};

export const decrement = x => {
  return {
    type: types.DECREASE_VALUE,
    payload: x
  };
};
