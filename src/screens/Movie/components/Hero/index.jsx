import React from 'react'
import styled from 'styled-components'
import { Flexbox, Container } from 'components/Layout'
import FAIcon from 'components/FAIcon'
import { brandColor } from 'shared/colors'

const Wrapper = styled.div`
  background-image: url(${props => props.coverUrl});
  background-size: cover;
  position: relative;
  padding: 60px 0;

  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
    z-index: 0;
  }
`

const CustomContainer = styled(Container)`
  z-index: 1
`

const Title = styled.h1`
  font-size: 44px;
  font-weight: bold;
  color: white;
  margin-bottom: 24px;
  display: block;
`

const Poster = styled.img`
  width: 280px;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: -150px;
`

const PlayButtonContainer = styled.div`
  width: 100%;
  align-self: center;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in-out transform;
  cursor: pointer;
  color: white;

  &:hover {
    color: ${brandColor};
    transform: scale(1.2);
  }
`

const PlayButton = styled(FAIcon)`
  font-size: 60px;
  cursor: pointer;
`

const PlayButtonLabel = styled.span`
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left: 20px;
  font-weight: bold;
`

export default function Hero(props) {
  return (
    <Wrapper {...props}>
      <CustomContainer>
        <Title>{props.title}</Title>
        <Flexbox alignItems="flex-start">
          <Poster src={props.posterUrl} alt={props.title} />
          <PlayButtonContainer>
            <PlayButton icon="play-circle" />
            <PlayButtonLabel>Watch Trailer</PlayButtonLabel>
          </PlayButtonContainer>
        </Flexbox>
      </CustomContainer>
    </Wrapper>
  )
}

Hero.propTypes = {
  posterUrl: React.PropTypes.string.isRequired,
  coverUrl: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  trailerUrl: React.PropTypes.string.isRequired,
}
