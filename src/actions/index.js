/**
 * Actions
 */

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';

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

export const addCard = (card) => {
  return (dispatch) => {
    return fetch('/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(card),
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