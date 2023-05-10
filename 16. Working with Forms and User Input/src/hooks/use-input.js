import { useState, useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false
}


const inputStateReducer = (state, action) => {
  switch(action.type) {
    case 'INPUT':
      return {
        ...state,
        value: action.value
      }
    case 'BLUR':
      return {
        ...state,
        isTouched: true
      }
    case 'RESET':
      return {
        isTouched: false,
        value: ''
      }
    default:
      return initialInputState
  }
}

const useInput = (validateValue) => {
  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);
  const [inputState, dispatch] = useReducer(inputStateReducer, {})

  const valueIsValid = validateValue(inputState.value);

  const hasError = !valueIsValid && inputState.isTouched;

  const inputClasses = hasError
    ? "form-control invalid"
    : "form-control";

  const valueChangeHandler = (e) => {
    // setEnteredValue(e.target.value);
    dispatch({type: 'INPUT', value: e.target.value});
  };

  const inputBlurHandler = (e) => {
    // setIsTouched(true);
    dispatch({type: 'BLUR'})
  };

  const reset = () => {
    // setEnteredValue("")
    // setIsTouched(false)
    dispatch({type: 'RESET'})
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    inputClasses,
    valueChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
