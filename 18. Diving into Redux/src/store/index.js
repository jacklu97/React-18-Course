import { createStore } from "redux";

import STORE_ACTIONS from "./storeActions";

const initialState = {
  counter: 0,
  showCounter: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_ACTIONS.INCREMENT:
      const increaser = action.payload ?? 1;
      return {
        ...state,
        counter: state.counter + increaser,
      };

    case STORE_ACTIONS.DECREMENT:
      return { ...state, counter: state.counter - 1 };

    case STORE_ACTIONS.TOGGLE:
      return { ...state, showCounter: !state.showCounter}

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
