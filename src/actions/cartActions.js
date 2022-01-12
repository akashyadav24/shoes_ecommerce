export const addToCart =
  (product, quantity, color, size) => (dispatch, getState) => {
    const cartItem = {
      name: product.name,
      id: product.id,
      price: product.price,
      countInStock: product.countInStock,
      quantity: quantity,
      color: color,
      size: size,
    };
    dispatch({ type: "ADD_TO_CART", payload: cartItem });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cartReducer.cartItems)
    );
  };

export const deleteFromCart = (item) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: item });

  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const selectAllItem = (id) => (dispatch) =>
  dispatch({
    type: "SELECT_ITEM",
    payload: id,
  });

export const clearAllItem = () => (dispatch) =>
  dispatch({
    type: "CLEAR_ITEM",
  });

export const deleteAllItem = () => (dispatch, getState) => {
  dispatch({
    type: "DELETE_SELECTED_ITEM",
  });
  localStorage.setItem(
    "cartItems",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};
