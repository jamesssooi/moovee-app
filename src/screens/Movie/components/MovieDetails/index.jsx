import React from 'react'
import styled from 'styled-components'
import { Flexbox, Container } from 'components/Layout'

const Wrapper = styled(Container)`

`

const Sidebar = styled.div`
  width: 280px;
`

export default function MovieDetails(props) {
  return (
    <Wrapper>
      Lorem ipsum
    </Wrapper>
  )
}

MovieDetails.propTypes = {
  movie: React.PropTypes.object
}