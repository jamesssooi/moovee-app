import React from 'react'
import Landing from 'screens/Home/components/Hero'
import FeatureBar from 'screens/Home/components/FeatureBar'
import FeaturedMovies from 'screens/Home/components/FeaturedMovies'

export default function Home() {
  return (
    <div>
      <Landing />
      <FeatureBar />

      {/* Movie Grid */}
      <FeaturedMovies />
    </div>
  )
}
