import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Container } from 'components/Layout'
import { secondaryColor } from 'shared/colors'
import { onEnterMoviePage } from './handler'
import Hero from './components/Hero'
import MovieDetails from './components/MovieDetails'
import BookPanel from './components/BookPanel'
import coverImg from './sample.jpg'

const DetailsContainer = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
`

const Sidebar = styled.div`
  padding-top: 90px;
  width: 280px;
  flex-shrink: 0;
`

const SidebarItem = styled.div`
  background-color: ${secondaryColor};
  padding: 16px;
  color: white;
  border-radius: 9px;
`

const Movie = (props) => {
  return (
    <div>
      <Hero
        title={props.movie.title}
        posterUrl={props.movie.posterUrl}
        coverUrl={coverImg}
        trailerUrl="1234"
      />
      <DetailsContainer>
        <Sidebar>
          <BookPanel movie={props.movie} sessions={props.sessions} />
        </Sidebar>
        <MovieDetails movie={props.movie} />
      </DetailsContainer>
    </div>
  )
}

const getMovieSessionsByMovieId = (sessions, movieId) => {
  if (sessions === undefined || sessions === null) { return null }
  const ids = Object.keys(sessions)
                    .filter(value => sessions[value].movieId === movieId || true)
  return ids.map(value => sessions[value])
}

const mapStateToProps = (state, ownProps) => {
  const movieId = ownProps.params.movieId
  return {
    movie: state.movies.byId[movieId],
    sessions: getMovieSessionsByMovieId(state.movieSessions.byId, movieId)
  }
}

const mapDispatchToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
export { onEnterMoviePage }
