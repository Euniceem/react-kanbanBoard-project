import { LOAD_CARDS, ADD_CARD, EDIT_CARD, LOAD_USERS } from '../actions';

// const cardReducer = (state = {
//   cards: [],
//   users: []
// }, action) => {

//   switch (action.type) {
//     case LOAD_CARDS:
//       return Object.assign({}, state, { cards: action.payload });
//     case ADD_CARD:
//       return Object.assign({}, state, { cards: [...state.cards, action.payload] });
//     case EDIT_CARD:
//       return Object.assign({}, state, { cards: action.payload });
//     default:
//       return state;
//   }
// }

const cardReducer = (state = [], action) => {

  switch (action.type) {
    case LOAD_CARDS:
      console.log(action.payload)
      return [].concat(action.payload);
    case ADD_CARD:
      return [...state, action.payload];
    case EDIT_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default cardReducer;