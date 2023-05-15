import { createSlice, configureStore } from '@reduxjs/toolkit'

// import STORE_ACTIONS from "./storeActions";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter += action.payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    }
  }
})

/**
 * Usage of "pure" redux
 * Must follow the rule of inmutability of state
 * */ 
// const reducer = (state = initialState, action) => {
  //   switch (action.type) {
    //     case STORE_ACTIONS.INCREMENT:
    //       const increaser = action.payload ?? 1;
    //       return {
      //         ...state,
//         counter: state.counter + increaser,
//       };

//     case STORE_ACTIONS.DECREMENT:
//       return { ...state, counter: state.counter - 1 };

//     case STORE_ACTIONS.TOGGLE:
//       return { ...state, showCounter: !state.showCounter}

//     default:
//       return state;
//   }
// };

//// Export of reducer using redux
// const store = createStore(reducer);


const store = configureStore({
  // reducer: { counter: counterSlice.reducer }
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions

export default store;
