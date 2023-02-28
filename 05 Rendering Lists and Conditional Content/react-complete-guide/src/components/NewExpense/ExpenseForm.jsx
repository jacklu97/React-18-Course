import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  // Multiple states approach
  // const [title, setTitle] = useState('')
  // const [amount, setAmount] = useState('')
  // const [date, setDate] = useState('')

  // Single state approach
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: ''
  })

  const titleChangeHandler = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        title: e.target.value
      }
    })
  }

  const amountChangeHandler = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        amount: e.target.value
      }
    })
  }

  const dateChangeHandler = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        date: e.target.value
      }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    onSaveExpenseData({
      ...userInput,
      date: new Date(userInput.date)
    })

    resetFields()
  }

  const cancelHandler = () => {
    resetFields()
    onCancel()
  }

  const resetFields = () => {
    setUserInput(
      Object.keys(userInput).reduce((acc, current) => {
        acc[current] = ''
        return acc
      }, {})
    )
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={userInput.title}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={userInput.amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={userInput.date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={cancelHandler}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
