/**
 * Actions
 */

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARDS';


/**
 * Action Creators
 */

export const loadCards = () => {
  return (dispatch) => {
    return fetch('./cards')
      .then((response) => {
        return response.json()
      })
      .then((cards) => {
        return dispatch({
          type: LOAD_CARDS,
          payload: cards
        })
      })
  }
}

export function addCards(newCard) {
  return {
    type: ADD_CARD,
    payload: newCard
  }
}

export const addCardAsync = (card) => {
  return (dispatch) => {
    return fetch('./cards', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content_Type': 'application/json'
      }
    })
      .then((response) => {
        return response.json()
      })
      .then((body) => {
        return dispatch({
          type: ADD_CARD,
          payload: body
        })
      })
  }
}