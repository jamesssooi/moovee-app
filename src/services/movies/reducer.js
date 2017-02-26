/**
 * Movies service
 * Reducer
 */
import { handleActions } from 'redux-actions'

const initialState = {
  byId: {},
  isFetching: false
}

const movies = handleActions({
  MOVIE_ADD: (state, action) => {
    return {
      ...state,
      byId: { ...state.byId, [action.payload.movieId]: action.payload }
    }
  },
  MOVIE_ADD_LIST: (state, action) => {
    return {
      ...state,
      byId: { ...state.byId, ...action.payload }
    }
  },
  IS_FETCHING: (state, action) => {
    return { ...state, isFetching: action.payload }
  }
}, initialState)

export default movies
