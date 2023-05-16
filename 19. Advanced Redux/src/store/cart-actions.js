import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch("https://react-http-c1c44-default-rtdb.firebaseio.com/cart.json")

      if (!response.ok) {
        throw new Error("Could not fetch cart data")
      }

      const data = await response.json()

      return data
    }

    try {
      const cartData = await fetchData()
      dispatch(cartActions.replaceCart({
        ...cartData,
        items: cartData.items ?? []
      }))
    } catch {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data!",
        })
      );
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      // Don't send the "changed" flag using destructuring assigment
      // const {changed, ...cartData} = cart
      const response = await fetch(
        "https://react-http-c1c44-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          // body: JSON.stringify(cartData),
          // This approach is similar to destructuring assigment but this prevents the unwanted property to be assigned
          body: JSON.stringify((({changed, ...o}) => o)(cart)),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Success!",
        })
      );
    } catch {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};