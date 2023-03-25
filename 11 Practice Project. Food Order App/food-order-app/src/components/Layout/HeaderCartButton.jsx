import { useContext, useEffect, useState } from 'react'

import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)

  const { items } = cartCtx

  const cartItemsTotal = items.reduce((acc, act) => acc + act.amount, 0)

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

  useEffect(() => {
    if (cartItemsTotal > 0) {
      setBtnIsHighlighted(true)

      const timer = setTimeout(() => {
        setBtnIsHighlighted(false)
      }, 300)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>
        Your Cart
      </span>
      <span className={classes.badge}>
        {cartItemsTotal}
      </span>
    </button>
  )
}

export default HeaderCartButton
