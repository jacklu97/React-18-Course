import { useState } from 'react'
import ExpenseForm from './ExpenseForm'

import './NewExpense.css'

const NewExpense = ({ onAddExpense }) => {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const saveExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString()
    }

    onAddExpense(expenseData)
  }

  const toggleHandler = () => {
    setIsFormVisible(prev => !prev)
  }

  return (
    <div className='new-expense'>
      {
        isFormVisible
          ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={toggleHandler} />
          : <button onClick={toggleHandler}>Add New Expense</button>
      }

    </div>
  )
}

export default NewExpense
