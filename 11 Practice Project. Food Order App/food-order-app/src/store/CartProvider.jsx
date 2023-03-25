import { useReducer } from 'react'

import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducerActions = {
  ADD: 'ADD',
  REMOVE: 'REMOVE'
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case cartReducerActions.ADD: {
      const newTotalAmout = state.totalAmount + action.item.price * action.item.amount
      const existingItem = state.items.find(item => item.id === action.item.id)
      const existingItemIndex = state.items.findIndex(item => item.id === action.item.id)
      let updatedItems

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + action.item.amount
        }
        updatedItems = [...state.items]
        updatedItems[existingItemIndex] = updatedItem
      } else {
        updatedItems = state.items.concat(action.item)
      }

      return {
        items: updatedItems,
        totalAmount: newTotalAmout
      }
    }
    case cartReducerActions.REMOVE: {
      const existingItem = state.items.find(item => item.id === action.id)
      const existingItemIndex = state.items.findIndex(item => item.id === action.id)
      const updatedTotal = Math.abs(state.totalAmount - existingItem.price)
      let updatedItems

      if (existingItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id)
      } else {
        const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
        updatedItems = [...state.items]
        updatedItems[existingItemIndex] = updatedItem
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotal
      }
    }
    default:
      ;
  }
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: cartReducerActions.ADD, item })
  }

  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: cartReducerActions.REMOVE, id })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
