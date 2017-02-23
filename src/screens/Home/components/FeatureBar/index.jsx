import React from 'react'
import styled from 'styled-components'
import { Container, Row, Column } from 'components/Layout'
import { secondaryColor } from 'shared/colors'

const Section = styled.div`
  background-color: ${secondaryColor};
  padding: 48px 0;
`

const SectionHeading = styled.h3`
  font-size: 28px;
  color: white;
  text-align: center;
`

const FeatureItem = styled(Column)`
  color: white;
  text-align: center;
`

export default function FeatureBar() {
  return (
    <Section>
      <Container>
        <SectionHeading>How it works</SectionHeading>
        <Row>
          <FeatureItem>Browse offers</FeatureItem>
          <FeatureItem>Book movie tickets</FeatureItem>
          <FeatureItem>Enjoy your movie</FeatureItem>
        </Row>
      </Container>
    </Section>
  )
}
