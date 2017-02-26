import { fetchMovieList } from 'services/movies/actions'

export const onEnterHomePage = (store) => {
  return (nextState, replace) => {
    store.dispatch(fetchMovieList())
  }
}
