import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

const ExpenseList = ({ expenses }) => {
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
