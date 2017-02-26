import React from 'react'
import styled from 'styled-components'
import { Flexbox, Container } from 'components/Layout'

const Wrapper = styled.div`
  padding-left: 32px;
`

const Sidebar = styled.div`
  padding-top: 90px;
  width: 280px;
`

export default function MovieDetails(props) {
  return (
    <Wrapper>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec augue mattis ligula luctus consectetur. Nulla facilisi. Cras viverra velit scelerisque ante tempor blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce suscipit dui ante, eget facilisis nisl elementum vitae. Aliquam vel tellus id lorem fermentum lobortis. Sed risus lacus, porta nec risus sit amet, vehicula lobortis tortor. Phasellus non aliquet ipsum. Sed est velit, fringilla et placerat sed, pharetra quis sapien.
      </p>

      <p>
        Aenean molestie est nulla, id fermentum diam sagittis ut. Nunc eu malesuada leo. Quisque in ornare elit. Ut a pulvinar lectus, sit amet porta nulla. Duis scelerisque convallis urna a convallis. Praesent rhoncus nulla ac sem bibendum, at iaculis massa tempor. Duis quam enim, convallis id ornare vel, congue sodales ipsum. Nam eu metus et est commodo porta. Aenean id eros ligula.
      </p>
    </Wrapper>
  )
}

MovieDetails.propTypes = {
  movie: React.PropTypes.object
}