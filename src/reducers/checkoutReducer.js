export const checkoutReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TO_CHECKOUT":
      return {
        ...state,
        checkoutItems: action.payload,
      };
    default:
      return state;
  }
};
