/**
 * Movie Sessions
 * Actions
 */

import parse from 'date-fns/parse'

const mockData = [
  {
    id: 1,
    movieId: 2,
    cinema: 'TGV Sunway Pyramid',
    time: '2016-02-25T19:30:00',
    price: 10,
    discount: 0.5
  },
  {
    id: 2,
    movieId: 2,
    cinema: 'TGV Sunway Pyramid',
    time: '2016-02-25T20:00:00',
    price: 10,
    discount: 0.4
  },
  {
    id: 3,
    movieId: 2,
    cinema: 'TGV Sunway Pyramid',
    time: '2016-02-25T21:00:00',
    price: 10,
    discount: 0.3
  }
]

export const fetchMovieSessionsSuccess = (movieSessions) => {
  const movieSessionsObj = movieSessions.reduce((prev, curr) => {
    return { ...prev, [curr.id]: { ...curr, time: parse(curr.time) } }
  }, {})

  return {
    type: 'MOVIE_SESSION_FETCH_SUCCESS',
    payload: movieSessionsObj
  }
}

export const fetchMovieSessions = movieId => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    dispatch({ type: 'MOVIE_SESSION_FETCH' })

    window.setTimeout(() => {
      dispatch(fetchMovieSessionsSuccess(mockData))

      const ids = mockData.map(value => value.id)
      const data = ids.map(value => getState().movieSessions.byId[value])

      resolve(data)
    }, 1500)
  })
}
