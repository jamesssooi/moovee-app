import { fetchMovie } from 'services/movies/actions'
import { fetchMovieSessions } from 'services/movieSessions/actions'

export const onEnterConfirmationPage = (store) => {
  return (nextState, replace, done) => {
    const movieId = nextState.params.movieId
    if (!store.getState().movies.byId[movieId]) {
      Promise.all([
        store.dispatch(fetchMovie(movieId)),
        store.dispatch(fetchMovieSessions(movieId))
      ]).then(() => { done() })
    } else {
      done()
    }
  }
}