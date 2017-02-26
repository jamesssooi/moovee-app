import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'
import { Flexbox, Button } from 'components/Layout'
import { brandColor, secondaryColor } from 'shared/colors'
import format from 'date-fns/format'

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

const Subtitle = styled.span`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  display: block;
  margin-bottom: 1em;
`

const ShowtimeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -3px;
`

const Showtime = (props) => {
  const ShowtimeButton = styled(Button)`
    margin: 0 3px;
    padding: 6px;
    background-color: ${brandColor};
    border-color: ${brandColor};
    text-align: center;
    border-radius: 6px;
    line-height: 1.2;
    flex-grow: 1;
  `

  const ShowtimeTimeLabel = styled.span`
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
    color: white;
  `

  const ShowtimeDiscountLabel = styled.span`
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.8);
    font-weight: normal;
  `

  return (
    <ShowtimeButton link>
      <Link to={`/movies/${props.session.movieId}/book/${props.session.id}`}>
        <ShowtimeTimeLabel>{format(props.session.time, 'h:mma')}</ShowtimeTimeLabel>
        <ShowtimeDiscountLabel>{props.session.discount * 100}% off</ShowtimeDiscountLabel>
      </Link>
    </ShowtimeButton>
  )
}

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
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <InputLabel>Cinema</InputLabel>
          <Select>
            <option>TGV Sunway Pyramid</option>
            <option>TGV 1 Utama</option>
            <option>TGV Pavillion</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <InputLabel>Date</InputLabel>
          <Select>
            <option>27 Feb</option>
            <option>28 Feb</option>
            <option>29 Feb</option>
          </Select>
        </FormGroup>
      </Form>
      <Subtitle>Select showtime</Subtitle>
      <ShowtimeWrapper>
        {props.sessions.map(session => (
          <Showtime
            session={session}
            key={session.id}
          />
        ))}
      </ShowtimeWrapper>
    </Wrapper>
  )
}
