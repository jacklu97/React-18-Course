import ExpenseItem from './components/ExpenseItem'

function App () {
  return (
    <>
      <h2>Let's get started!</h2>
      <p>This is also visible</p>
      <ExpenseItem date={new Date()} title='Car Insurance' amount={294.67} />
    </>
  )
}

export default App
