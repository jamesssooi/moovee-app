import { fetchMovie } from 'services/movies/actions'

export const onEnterMoviePage = (store) => {
  return (nextState, replace) => {
    const movieId = nextState.params.movieId
    if (!store.getState().movies.byId[movieId]) {
      store.dispatch(fetchMovie(movieId)).then(() => {
        //done()
      })
    }
  }
}
