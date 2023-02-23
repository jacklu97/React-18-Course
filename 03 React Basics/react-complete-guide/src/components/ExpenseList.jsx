import Card from './Card'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

function ExpenseList ({ expenses }) {
  return (
    <Card className='expenses'>
      {
        expenses.map(expense =>
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
