import { BUY_MUFFIN } from "./muffinTypes";

const initialState = {
  numOfMuffin: 15,
};

const muffinReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_MUFFIN:
      return {
        ...state,
        numOfMuffin: state.numOfMuffin - 1,
      };
    default:
      return state;
  }
};

export default muffinReducer;
