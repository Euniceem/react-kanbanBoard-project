import { LOAD_CARDS, ADD_CARD, EDIT_CARD, DELETE_CARD } from '../actions';

const cardReducer = (state = [], action) => {

  switch (action.type) {
    case LOAD_CARDS:
      return [].concat(action.payload);
    case ADD_CARD:
      return [...state, action.payload];
    case EDIT_CARD:
      return [...state, action.payload];
    case DELETE_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default cardReducer;