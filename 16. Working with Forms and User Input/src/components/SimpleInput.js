import { useState } from "react";

import useInput from "../hooks/use-input";

// import BaseInput from "./BaseInput";
// const SimpleInput = (props) => {
//   const [enteredName, setEnteredName] = useState("");
//   const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

//   const [enteredEmail, setEnteredEmail] = useState("");
//   const [emailIsValid, setEmailIsValid] = useState(false);

//   let formIsValid = false;

//   if (enteredNameIsValid && emailIsValid) {
//     formIsValid = true;
//   } else {
//     formIsValid = false;
//   }

//   const formSubmitionHandler = (event) => {
//     event.preventDefault();

//     if (!enteredNameIsValid) {
//       return;
//     }

//     console.log(enteredName);
//   };

//   const validateEmail = (email) => {
//     const emailRegex = new RegExp(
//       /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
//       "gm"
//     );
//     return emailRegex.test(email);
//   };

//   return (
//     <form onSubmit={formSubmitionHandler}>
//       <BaseInput
//         value={enteredName}
//         valueChangeHandler={setEnteredName}
//         validInputHandler={setEnteredNameIsValid}
//         labelText="Your Name"
//         inputEmptyText="Name must not be empty"
//         inputType={"text"}
//         inputId={"name"}
//       />
//       <BaseInput
//         labelText={"Your Email"}
//         inputEmptyText={"Email must not be empty"}
//         inputInvalidText={"Email is not valid"}
//         inputType={"email"}
//         inputId="email"
//         inputValidator={validateEmail}
//         validInputHandler={setEmailIsValid}
//         value={enteredEmail}
//         valueChangeHandler={setEnteredEmail}
//       />
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => !value.isEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((email) => {
    const emailRegex = new RegExp(
      /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
      "gm"
    );
    return emailRegex.test(email);
  });

  let formIsValid = false;

  if (enteredNameIsValid && emailIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmitionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          onBlur={nameBlurHandler}
          onChange={nameChangedHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your email</label>
        <input
          type="email"
          id="email"
          onBlur={emailBlurHandler}
          onChange={emailChangedHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
