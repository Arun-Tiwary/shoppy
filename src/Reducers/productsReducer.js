const initialState = {
  product: [],
  cart: [],
};

const productsReducer = (state = initialState, action) => {
  console.log("payload", action.payload);

  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, product: [...action.payload] };

    case "ADD_TO_CART": {
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    }

    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== action.payload.id)],
      };
    }

    case "INCREASE_QTY": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    }

    case "DEC_QTY": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
        ),
      };
    }

    default:
      return state;
  }
};

export default productsReducer;
