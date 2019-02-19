/**
 * Actions
 */

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const DELETE_CARD = 'DELETE_CARD';

/**
 * Action Creators
 */

export const loadCards = () => {
  return (dispatch) => {
    return fetch('/cards')
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

export const editCard = (card) => {
  return (dispatch) => {
    return fetch('/cards', {
      method: 'PUT',
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
          type: EDIT_CARD,
          payload: body
        })
      })
  }
}

export const deleteCard = (id) => {
  return (dispatch) => {
    return fetch(`/cards/${id}`, {
      method: 'DELETE'

    })

      .then((body) => {
        return dispatch({
          type: DELETE_CARD,
          payload: body
        })
      })
  }
}