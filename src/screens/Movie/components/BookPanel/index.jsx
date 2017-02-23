import React from 'react'
import styled from 'styled-components'
import { brandColor, secondaryColor } from 'shared/colors'

const Wrapper = styled.div`
  background-color: ${secondaryColor};
  padding: 16px;
  color: white;
  border-radius: 9px;
`

const Titles = styled.div`
  border-bottom: 1px solid white;
  padding-bottom: 12px;
`

const PromotionTitle = styled.span`
  display: block;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const CallToActionTitle = styled.span`
  display: block;
  font-size: 24px;
  color: ${brandColor};
  font-weight: bold;
  text-align: center;
`

export default function BookPanel() {
  return (
    <Wrapper>
      <Titles>
        <PromotionTitle>Up to 50% off</PromotionTitle>
        <CallToActionTitle>Book Now!</CallToActionTitle>
      </Titles>
    </Wrapper>
  )
}
