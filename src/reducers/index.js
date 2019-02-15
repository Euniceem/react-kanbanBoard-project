import { LOAD_CARDS, ADD_CARD } from '../actions';

const cardReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_CARDS:
      console.log(action.payload)
      return [].concat(action.payload);
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}



export default cardReducer;