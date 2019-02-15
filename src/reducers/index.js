import { LOAD_CARDS } from '../actions';

const cardReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_CARDS:
      console.log(action.payload)
      return [].concat(action.payload);
    default:
      return state;
  }
}



export default cardReducer;