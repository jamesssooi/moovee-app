import React from 'react'
import styled from 'styled-components'
import { Container } from 'components/Layout'
import { MovieGrid, MovieThumbnail } from 'components/MovieDisplay'
import { textColor } from 'shared/colors'

const Wrapper = styled(Container)`
  padding-top: 48px;
`

const FeaturedSection = styled.div`
  margin-bottom: 48px;
`

const SectionHeading = styled.span`
  display: block;
  padding-bottom: 6px;
  margin-bottom: 1em;
  font-size: 24px;
  text-align: center;
  border-bottom: 1px solid ${textColor};
  color: ${textColor};
`

export default function FeaturedMovies() {
  return (
    <Wrapper>
      {/* Latest offers */}
      <FeaturedSection>
        <SectionHeading>Latest offers</SectionHeading>
        <MovieGrid>
          <MovieThumbnail title="Rogue Two" poster="/assets/rogueone.jpg" id="1" />
          <MovieThumbnail title="Rogue One" poster="/assets/rogueone.jpg" id="1" />
          <MovieThumbnail title="Rogue One" poster="/assets/rogueone.jpg" id="1" />
          <MovieThumbnail title="Rogue One" poster="/assets/rogueone.jpg" id="1" />
        </MovieGrid>
      </FeaturedSection>

      {/* Hot movies */}
      <FeaturedSection>
        <SectionHeading>Hot movies</SectionHeading>
        <MovieGrid>
          <MovieThumbnail title="Rogue Two" poster="/assets/rogueone.jpg" id="1" />
          <MovieThumbnail title="Rogue One" poster="/assets/rogueone.jpg" id="1" />
          <MovieThumbnail title="Rogue One" poster="/assets/rogueone.jpg" id="1" />
          <MovieThumbnail title="Rogue One" poster="/assets/rogueone.jpg" id="1" />
        </MovieGrid>
      </FeaturedSection>
      
      {/* Coming soon */}
      <FeaturedSection>
        <SectionHeading>Coming soon</SectionHeading>
        <MovieGrid>
          <MovieThumbnail title="Rogue Two" poster="/assets/rogueone.jpg" id="1" />
          <MovieThumbnail title="Rogue One" poster="/assets/rogueone.jpg" id="1" />
          <MovieThumbnail title="Rogue One" poster="/assets/rogueone.jpg" id="1" />
          <MovieThumbnail title="Rogue One" poster="/assets/rogueone.jpg" id="1" />
        </MovieGrid>
      </FeaturedSection>
    </Wrapper>
  )
}

