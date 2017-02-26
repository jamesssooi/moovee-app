import React from 'react'
import { connect } from 'react-redux'
import Landing from 'screens/Home/components/Hero'
import FeatureBar from 'screens/Home/components/FeatureBar'
import FeaturedMovies from 'screens/Home/components/FeaturedMovies'
import { onEnterHomePage } from './handler'

const Home = (props) => {
  return (
    <div>
      {/* Hero */}
      <Landing />

      {/* Feature Bar */}
      <FeatureBar />

      {/* Movie Grid */}
      <FeaturedMovies movies={props.movies} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.byId
  }
}

const mapDispatchToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

export { onEnterHomePage }
