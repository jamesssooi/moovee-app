import { combineReducers } from 'redux'

// Reducer imports
import movies from 'services/movies/reducer'

const rootReducer = combineReducers({
  movies: movies
})

export default rootReducer
