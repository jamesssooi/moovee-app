import React from 'react'
import styled from 'styled-components'
import MovieSearcher from 'components/MovieSearcher'
import { Container } from 'components/Layout'
import { brandColor } from 'shared/colors'
import background from './background.jpg'

const Hero = styled.div`
  background-image: url(${background});
  background-size: cover;
  padding: 150px 0;
  text-align: center;
`

const Title = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 30px 60px;
  border-radius: 12px;
  text-align: left;
  display: inline-block;
  color: white;
`
const Heading = styled.span`
  display: block;
  font-size: 40px;
  font-weight: bold;
`

const HighlightedHeading = styled.span`
  color: ${brandColor};
`

const Subheading = styled.span`
  display: block;
  font-size: 28px;
  margin-bottom: 1em;
`

export default function Landing(props) {
  return (
    <Hero>
      <Container>
        <Title>
          <Heading>
            Spend less.&nbsp;
            <HighlightedHeading>Watch more.</HighlightedHeading>
          </Heading>
          <Subheading>Movie tickets up to 50% off.</Subheading>

          <MovieSearcher />
        </Title>
      </Container>
    </Hero>
  )
}
