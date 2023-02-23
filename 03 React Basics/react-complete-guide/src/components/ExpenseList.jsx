import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

function ExpenseList ({ expenses }) {
  return (
    <div className='expenses'>
      {
        expenses.map(expense => <ExpenseItem key={expense.id} date={expense.date} amount={expense.amount} title={expense.title} />)
      }
    </div>
  )
}

export default ExpenseList
