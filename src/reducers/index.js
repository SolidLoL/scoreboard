const reducer = (state, action) => {
    switch (action.type) {
        // ADD_TO_CART
      case 'ADD_TO_FAVORITES':
        return {
          ...state,
          cart: [...state.favorites, action.payload],
        };
      case 'REMOVE_FROM_FAVORITES':
        return {
          ...state,
          cart: state.favorites.filter(items => items.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  export default reducer;