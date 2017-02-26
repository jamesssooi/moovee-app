/**
 * Movies service
 * Actions
 */

const mockData = [
  {
    movieId: '0',
    title: 'Rogue One: A Star Wars Story',
    posterUrl: '/assets/posters/rogueone.jpg'
  },
  {
    movieId: '1',
    title: "A Dog's Purpose",
    posterUrl: '/assets/posters/adogspurpose.jpg'
  },
  {
    movieId: '2',
    title: 'Collide',
    posterUrl: '/assets/posters/collide.jpg'
  },
  {
    movieId: '3',
    title: 'Doctor Strange',
    posterUrl: '/assets/posters/doctorstrange.jpg'
  },
  {
    movieId: '4',
    title: 'Guardians',
    posterUrl: '/assets/posters/guardians.jpg'
  },
  {
    movieId: '5',
    title: 'John Wick Chapter 2',
    posterUrl: '/assets/posters/johnwickchapter2.jpg'
  },
  {
    movieId: '6',
    title: 'Moana',
    posterUrl: '/assets/posters/moana.jpg'
  },
  {
    movieId: '7',
    title: 'Monster Truck',
    posterUrl: '/assets/posters/monstertruck.jpg'
  },
  {
    movieId: '8',
    title: 'Resident Evil: The Final Chapter',
    posterUrl: '/assets/posters/residentevilthefinalchapter.jpg'
  },
  {
    movieId: '9',
    title: 'Split',
    posterUrl: '/assets/posters/split.jpg'
  },
  {
    movieId: '10',
    title: 'The Arrival',
    posterUrl: '/assets/posters/thearrival.jpg'
  },
  {
    movieId: '11',
    title: 'The Jungle Book',
    posterUrl: '/assets/posters/thejunglebook.jpg'
  },
  {
    movieId: '12',
    title: 'The Lego Batman Movie',
    posterUrl: '/assets/posters/thelegobatmanmovie.jpg'
  }
]

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

      let idx = null;
      for (let i = 0; i < mockData.length; i++) {
        if (mockData[i].movieId === movieId) {
          idx = i
          break
        }
      }

      dispatch(fetchMovieSuccess(mockData[idx]))
      resolve(getState().movies.byId[movieId])
    }, 1000)
  })
}

export const fetchMovieListSuccess = (movies) => {
  return {
    type: 'MOVIE_ADD_LIST',
    payload: movies.reduce((prev, curr) => {
      return { ...prev, [curr.movieId]: curr }
    }, {})
  }
}

export const fetchMovieList = () => {
  return fetchMovieListSuccess(mockData)
}
