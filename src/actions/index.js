/**
 * Actions
 */

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const LOAD_USERS = 'LOAD_USERS';

/**
 * Action Creators
 */

export const loadCards = () => {
  return (dispatch) => {
    return fetch('/cards')
      .then((response) => {
        console.log('response', response)
        return response.json()
      })
      .then((cards) => {
        console.log('ACTION', cards)
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
      body: JSON.stringify(card)
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
      body: JSON.stringify(card),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        console.log('Response', response)
        return response.json()
      })
      .then((body) => {
        console.log('BODY', body)
        return dispatch({
          type: EDIT_CARD,
          payload: body
        })
      })
  }
}

export const loadUsers = () => {
  return (dispatch) => {
    return fetch('/cards/users')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        return dispatch({
          type: LOAD_USERS,
          payload: users
        })
      })
  }
}