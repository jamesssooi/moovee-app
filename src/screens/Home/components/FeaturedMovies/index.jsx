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

export default function FeaturedMovies(props) {
  return (
    <Wrapper>
      {/* Latest offers */}
      <FeaturedSection>
        <SectionHeading>Latest offers</SectionHeading>
        <MovieGrid>
          {Object.keys(props.movies)
            .filter(movieId => [0, 4, 2, 8].indexOf(parseInt(movieId)) > -1)
            .map(id => (
              <MovieThumbnail
                id={props.movies[id].movieId}
                key={props.movies[id].movieId}
                title={props.movies[id].title}
                poster={props.movies[id].posterUrl}
              />
            ))
          }
        </MovieGrid>
      </FeaturedSection>

      {/* Hot movies */}
      <FeaturedSection>
        <SectionHeading>Hot movies</SectionHeading>
        <MovieGrid>
          {Object.keys(props.movies)
            .filter(movieId => [3, 1, 5, 6].indexOf(parseInt(movieId)) > -1)
            .map(id => (
              <MovieThumbnail
                id={props.movies[id].movieId}
                key={props.movies[id].movieId}
                title={props.movies[id].title}
                poster={props.movies[id].posterUrl}
              />
            ))
          }
        </MovieGrid>
      </FeaturedSection>
      
      {/* Coming soon */}
      <FeaturedSection>
        <SectionHeading>Coming soon</SectionHeading>
        <MovieGrid>
          {Object.keys(props.movies)
            .filter(movieId => [9, 10, 11, 12].indexOf(parseInt(movieId)) > -1)
            .map(id => (
              <MovieThumbnail
                id={props.movies[id].movieId}
                key={props.movies[id].movieId}
                title={props.movies[id].title}
                poster={props.movies[id].posterUrl}
              />
            ))
          }
        </MovieGrid>
      </FeaturedSection>
    </Wrapper>
  )
}

