import { useRef, useState } from 'react'

import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountRef = useRef()

  const submitHander = event => {
    event.preventDefault()

    const enteredAmount = amountRef.current.value
    if (enteredAmount.trim().length === 0 ||
      Number(enteredAmount) < 1 ||
      Number(enteredAmount) > 5) {
      setAmountIsValid(false)
      // eslint-disable-next-line
      return;
    }

    props.onAddToCart(Number(enteredAmount))
  }

  return (
    <form className={classes.form} onSubmit={submitHander}>
      <Input
        ref={amountRef}
        label='Amount' input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  )
}

export default MealItemForm
