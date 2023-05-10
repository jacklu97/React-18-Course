import { useState } from "react";

const BaseInput = ({
  inputType,
  inputId,
  inputValidator,
  validInput,
  labelText,
  inputInvalidText,
  inputEmptyText,
  validInputHandler,
  value,
  valueChangeHandler
}) => {
  const [inputTouched, setInputTouched] = useState(false);

  validInput =
    !value.isEmpty() &&
    (inputValidator !== undefined ? inputValidator(value) : true);

  validInputHandler(validInput);

  const inputIsInvalid = !validInput && inputTouched;

  const nameInputClasses = inputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const inputChangeHandler = (e) => {
    valueChangeHandler(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setInputTouched(true);
  };

  return (
    <div className={nameInputClasses}>
      <label htmlFor="name">{labelText}</label>
      <input
        type={inputType}
        id={inputId}
        value={value}
        onBlur={inputBlurHandler}
        onChange={inputChangeHandler}
      />
      {inputIsInvalid && (
        <p className="error-text">
          {value.isEmpty()
            ? inputEmptyText
            : inputInvalidText || inputEmptyText}
        </p>
      )}
    </div>
  );
};

export default BaseInput;
