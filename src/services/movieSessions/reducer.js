/**
 * Movie Sessions
 * Reducer
 */

import { handleActions } from 'redux-actions'

const initialState = {
  byId: {},
  isFetching: false,
  error: false,
  errorMessage: null
}

const movieSessions = handleActions({
  MOVIE_SESSION_FETCH: (state) => {
    return { ...state, isFetching: true }
  },
  MOVIE_SESSION_FETCH_SUCCESS: (state, action) => {
    return {
      ...state,
      byId: { ...state.byId, ...action.payload },
      isFetching: false,
    }
  },
  MOVIE_SESSION_FETCH_ERROR: (state, action) => {
    return {
      ...state,
      isFetching: false,
      error: true,
      errorMessage: action.payload
    }
  },
}, initialState)

export default movieSessions


