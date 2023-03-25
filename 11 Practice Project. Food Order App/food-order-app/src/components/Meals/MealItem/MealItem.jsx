import { useContext } from 'react'

import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'
import classes from './MealItem.module.css'

const MealItem = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext)

  const formatedPrice = `$${price.toFixed(2)}`

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id,
      name,
      price,
      amount
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formatedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default MealItem
