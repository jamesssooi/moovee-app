import React from 'react'
import styled from 'styled-components'
import { Flexbox } from 'components/Layout'

const BaseInput = styled.input`
  color: white;
`

const MovieInput = styled(BaseInput)`
  &[type="text"] {
    border-radius: 6px 0 0 6px;
    width: 50%;
  }
`

const CinemaInput = styled(BaseInput)`
  &[type="text"] {
    border-radius: 0;
    border-right: 0;
    border-left: 0;
    width: 30%;
  }
`

const DateInput = styled(BaseInput)`
  &[type="text"] {
    border-radius: 0 6px 6px 0;
    width: 20%;
  }
`

export default function MovieSearcher() {
  return (
    <Flexbox>
      <MovieInput type="text" placeholder="Movie" />
      <CinemaInput type="text" placeholder="Cinema" />
      <DateInput type="text" placeholder="Date" />
    </Flexbox>
  )
}
