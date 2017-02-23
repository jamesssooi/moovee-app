/**
 * Movies service
 * Actions
 */

export const isFetching = (value) => {
  return {
    type: 'IS_FETCHING',
    payload: value
  }
}

export const fetchMovieSuccess = (movie) => {
  return {
    type: 'MOVIE_ADD',
    payload: movie
  }
}

export const fetchMovie = movieId => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    dispatch(isFetching(true))

    // Check if movie is already in store
    if (getState().movies.byId[movieId] !== undefined) {
      dispatch(isFetching(false))
      resolve(getState().movies.byId[movieId])
      return
    }

    window.setTimeout(() => {
      dispatch(isFetching(false))
      dispatch(fetchMovieSuccess({
        movieId: movieId,
        title: 'Rogue One'
      }))
      resolve(getState().movies.byId[movieId])
    }, 1000)
  })
}
