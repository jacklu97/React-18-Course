import { useState } from 'react'

import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import './ExpenseList.css'

const ExpenseList = ({ expenses }) => {
  const [yearFilter, setYearFilter] = useState('2020')

  const yearSelectionHandler = (year) => {
    setYearFilter(Number(year))
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter selectedYear={yearFilter} onYearSelection={yearSelectionHandler} />
      {
        expenses
          .filter(expense => {
            return yearFilter === 0 || expense.date.getFullYear() === yearFilter
          })
          .map(expense =>
            <ExpenseItem
              key={expense.id}
              date={expense.date}
              amount={expense.amount}
              title={expense.title}
            />)
      }
    </Card>
  )
}

export default ExpenseList
