import React from 'react'
import styled from 'styled-components'
import { brandColor, secondaryColor } from 'shared/colors'
import { Link } from 'react-router'

const Wrapper = styled(Link)`
  display: block;
  width: ${props => (props.width ? props.width : 'auto')};
  margin-bottom: 1.5em;
  ${props => (!props.standalone && `
    padding-left: 12px;
    padding-right: 12px;
    width: 25%;
  `)}
`

const Poster = styled.img`
  width: 100%;
  display: block;
`

const Banner = styled.div`
  width: 100%;
  background-color: ${secondaryColor};
  text-align: center;
  color: ${brandColor};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.9rem;
`

const Textbox = styled.div`

`

const Title = styled.span`
  font-size: 12px;
`

export default function MovieThumbnail(props) {
  return (
    <Wrapper data-width={props.width} data-standalone={props.standalone} to={`/movies/${props.id}`}>
      <Banner>30% off</Banner>
      <Poster src={props.poster} alt={props.title} />
      <Textbox>
        <Title>{props.title}</Title>
      </Textbox>
    </Wrapper>
  )
}

MovieThumbnail.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  poster: React.PropTypes.string.isRequired,
  banner: React.PropTypes.string,
}

MovieThumbnail.defaultProps = {
  banner: null
}
