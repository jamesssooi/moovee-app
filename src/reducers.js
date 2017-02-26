import { combineReducers } from 'redux'

// Reducer imports
import movies from 'services/movies/reducer'
import bookings from 'services/bookings/reducer'
import movieSessions from 'services/movieSessions/reducer'

const rootReducer = combineReducers({
  movies: movies,
  movieSessions: movieSessions,
  bookings: bookings
})

export default rootReducer
