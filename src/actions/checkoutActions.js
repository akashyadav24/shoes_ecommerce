export const addToCheckout = (checkout) => (dispatch, getState) => {
  dispatch({ type: "ADD_TO_CHECKOUT", payload: checkout });
};
