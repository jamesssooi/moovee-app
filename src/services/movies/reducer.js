/**
 * Movies service
 * Reducer
 */
import { handleActions } from 'redux-actions'

const initialState = {
  byId: {},
  searchQuery: {
    movieId: null,
    cinemaId: null,
    date: null
  },
  isFetching: false
}

const movies = handleActions({
  MOVIE_ADD: (state, action) => {
    return {
      ...state,
      byId: { ...state.byId, [action.payload.id]: action.payload }
    }
  },
  IS_FETCHING: (state, action) => {
    return { ...state, isFetching: action.payload }
  }
}, initialState)

export default movies
