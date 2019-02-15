/**
 * Actions
 */

export const LOAD_CARDS = 'LOAD_CARDS';


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
        console.log("ACTIONS", cards)
        return dispatch({
          type: LOAD_CARDS,
          payload: cards
        })
      })
  }
}