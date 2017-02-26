import React from 'react'
import styled from 'styled-components'
import { Container, Row, Column } from 'components/Layout'
import { secondaryColor } from 'shared/colors'
import iconBrowse from './browse.svg'
import iconBuy from './buy.svg'
import iconEnjoy from './enjoy.svg'

const Section = styled.div`
  background-color: ${secondaryColor};
  padding: 48px 0;
`

const SectionHeading = styled.h3`
  font-size: 32px;
  color: white;
  text-align: center;
  font-weight: bold;
`

const FeatureItem = styled(Column)`
  color: white;
  text-align: center;
`

const FeatureItemIcon = styled.img`
  height: 96px;
  display: block;
  margin: 0 auto 20px;
`

const FeatureItemTitle = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const FeatureItemDesc = styled.span`
  display: block;
  font-size: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
`

export default function FeatureBar() {
  return (
    <Section>
      <Container>
        <SectionHeading>How it works?</SectionHeading>
        <Row>
          <FeatureItem>
            <FeatureItemIcon src={iconBrowse} />
            <FeatureItemTitle>Go to moovee.my</FeatureItemTitle>
            <FeatureItemDesc>
              Create an account and start browsing for movies
            </FeatureItemDesc>
          </FeatureItem>
          <FeatureItem>
            <FeatureItemIcon src={iconBuy} />
            <FeatureItemTitle>Book movie tickets</FeatureItemTitle>
            <FeatureItemDesc>
              Select your desired movies and make a booking
            </FeatureItemDesc>
          </FeatureItem>
          <FeatureItem>
            <FeatureItemIcon src={iconEnjoy} />
            <FeatureItemTitle>Enjoy your movie!</FeatureItemTitle>
            <FeatureItemDesc>
              Purchase your tickets and enjoy up to 50% off and save more
            </FeatureItemDesc>
          </FeatureItem>
        </Row>
      </Container>
    </Section>
  )
}
