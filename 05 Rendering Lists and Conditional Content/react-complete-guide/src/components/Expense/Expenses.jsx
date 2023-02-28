import { useState } from 'react'

import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  const [yearFilter, setYearFilter] = useState('2020')

  const yearSelectionHandler = (year) => {
    setYearFilter(year)
  }

  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === yearFilter
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter selectedYear={yearFilter} onYearSelection={yearSelectionHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  )
}

export default Expenses
