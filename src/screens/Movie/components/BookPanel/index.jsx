import React from 'react'
import styled from 'styled-components'
import { Flexbox, Button } from 'components/Layout'
import { brandColor, secondaryColor } from 'shared/colors'

const Wrapper = styled.div`
  background-color: ${secondaryColor};
  padding: 16px;
  color: white;
  border-radius: 9px;
`

const Titles = styled.div`
  border-bottom: 1px solid white;
  padding-bottom: 8px;
  margin-bottom: 16px;
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

const Form = styled.div`
  border-bottom: 1px solid white;
  padding-bottom: 8px;
  margin-bottom: 16px;
`

const FormGroup = styled.div`
  display: flex;
  margin-bottom: 12px;
  align-items: center;
`

const InputLabel = styled.label`
  width: 30%;
  flex-grow: 0;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: normal;
  margin-bottom: 0;
`

const Select = styled.select`
  width: 60%;
  margin-bottom: 0;
  margin-left: auto;
  color: white;
`

const ContinueButton = styled(Button)`
  background-color: ${brandColor};
  border-color: ${brandColor};
  margin-bottom: 0;
`

export default function BookPanel(props) {
  return (
    <Wrapper>
      <Titles>
        <PromotionTitle>Up to 50% off</PromotionTitle>
        <CallToActionTitle>Book Now!</CallToActionTitle>
      </Titles>
      <Form>
        <FormGroup>
          <InputLabel>Pax</InputLabel>
          <Select>
            {[1,2,3,4,5,6,7,8,9,10].map(value => <option>{value}</option>)}
          </Select>
        </FormGroup>
        <FormGroup>
          <InputLabel>Cinema</InputLabel>
          <Select>
            <option>TGV Sunway Pyramid</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <InputLabel>Date</InputLabel>
          <Select>
            <option>26 Feb</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <InputLabel>Showtime</InputLabel>
          <Select>
            <option>7:30PM</option>
          </Select>
        </FormGroup>
      </Form>
      <ContinueButton
        link block
        href={`#/movies/${props.movie.id}/book/1`}
      >
        Continue
      </ContinueButton>
    </Wrapper>
  )
}
