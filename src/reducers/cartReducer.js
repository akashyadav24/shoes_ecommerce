export const cartReducer = (
  state = { cartItems: [], selectedItems: [] },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyexist = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (alreadyexist) {
        return {
          ...state,
          cartItems: [
            ...state.cartItems.map((item) =>
              item.id === action.payload.id ? action.payload : item
            ),
          ],
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    case "DELETE_SELECTED_ITEM":
      return {
        ...state,
        cartItems: [],
      };
    case "SELECT_ITEM":
      return {
        ...state,
        selectedItems: action.payload,
      };

    case "CLEAR_ITEM":
      return {
        ...state,
        selectedItems: [],
      };

    default:
      return state;
  }
};
