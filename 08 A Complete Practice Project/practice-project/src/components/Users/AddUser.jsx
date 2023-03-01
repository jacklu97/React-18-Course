import { useState } from 'react'

import Button from '../UI/Button'
import Card from '../UI/Card'
import styles from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'

const ERROR_MESSAGES = {
  EMPTY_INPUT: {
    title: 'Invalid input',
    message: 'Please enter a valid name and age (non-empty values).'
  },
  INVALID_AGE: {
    title: 'Invalid age',
    message: 'Please enter a valid age (non-negative values).'
  }
}

const AddUser = ({ onNewUser }) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [error, setError] = useState()

  const isEmpty = (input) => {
    return input.trim().length === 0
  }

  const addUserHandler = (event) => {
    event.preventDefault()

    if (isEmpty(enteredUsername) || isEmpty(enteredAge)) {
      setError(ERROR_MESSAGES.EMPTY_INPUT)
      return
    }
    if (Number(enteredAge) < 0) {
      setError(ERROR_MESSAGES.INVALID_AGE)
      return
    }

    console.log(enteredUsername, enteredAge)
    onNewUser({
      username: enteredUsername,
      age: enteredAge
    })

    setEnteredUsername('')
    setEnteredAge('')
  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value)
  }

  const modalDismissHandler = () => {
    setError(null)
  }

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDismiss={modalDismissHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor='age'>Age (Years)</label>
          <input
            id='age'
            type='number'
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  )
}

export default AddUser
