import useInput from "../hooks/use-input";

const emailValidation = (email) => {
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );
  return emailRegex.test(email);
};

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputBlurHandler: firstNameBlurHandler,
    valueChangeHandler: firstNameChangeHandler,
    reset: resetFirstName,
    inputClasses: firstNameClasses,
  } = useInput((value) => !value.isEmpty());

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputBlurHandler: lastNameBlurHandler,
    valueChangeHandler: lastNameChangeHandler,
    reset: resetLastName,
    inputClasses: lastNameClasses,
  } = useInput((value) => !value.isEmpty());

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmail,
    inputClasses: emailClasses,
  } = useInput(emailValidation);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHanlder = e => {
    e.preventDefault();

    if (!formIsValid) {
      return
    }

    console.log("Submitted")
    console.log(firstNameValue)
    console.log(lastNameValue)
    console.log(emailValue)

    resetFirstName()
    resetLastName()
    resetEmail()
  }

  return (
    <form onSubmit={submitHanlder}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
          />
          {firstNameHasError && <p className="error-text">Please enter a first name</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className="error-text">Please enter a last name</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
