import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { onEnterMoviePage } from './handler'
import { Container, Flexbox } from 'components/Layout'
import Hero from './components/Hero'
import MovieDetails from './components/MovieDetails'
import BookPanel from './components/BookPanel'
import coverImg from './sample.jpg'

const DetailsContainer = styled(Container)`
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
`

const Sidebar = styled.div`
  width: 280px;
  flex-shrink: 0;
`

const Movie = (props) => {
  return (
    <div>
      <Hero
        title="Rogue One: A Star Wars Story"
        posterUrl="/assets/rogueone.jpg"
        coverUrl={coverImg}
        trailerUrl="1234"
      />
      <DetailsContainer>
        <Sidebar>
          <BookPanel />
        </Sidebar>
        <MovieDetails movie={props.movie} />
      </DetailsContainer>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    movie: state.movies.byId[ownProps.params.byId]
  }
}

const mapDispatchToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie)
export { onEnterMoviePage }
