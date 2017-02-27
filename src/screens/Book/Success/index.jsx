import React from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'
import { connect } from 'react-redux'
import { makeBooking } from 'services/bookings/actions'
import { Button, Flexbox, Container } from 'components/Layout'
import { brandColor, secondaryColor } from 'shared/colors'
import { Panel, PanelTitle, PanelSubtitle } from './../components/Panel'
import {
  DescriptiveList,
  DescriptiveItem,
  DescriptiveLabel,
  DescriptiveValue,
  Descriptive
} from './../components/DescriptiveList'
import qrCode from './qr.jpg'

const Wrapper = styled(Container)`
  padding-top: 60px;
  padding-bottom: 60px;
`

const BookingNumber = (props) => {
  const BookingNumberWrapper = styled.div`
    text-align: center;
    background-color: ${brandColor};
    border-radius: 9px;
    padding: 12px 24px;
    display: flex;
    margin-bottom: 24px;
  `

  const BookingNumberTitle = styled.span`
    font-weight: bold;
  `

  const BookingNumberValue = styled.span`
    margin-left: auto;
    color: ${secondaryColor};
    font-weight: bold;
  `

  return (
    <BookingNumberWrapper>
      <BookingNumberTitle>Booking Number</BookingNumberTitle>
      <BookingNumberValue>{props.bookingId}</BookingNumberValue>
    </BookingNumberWrapper>
  )
}

const QRCode = styled.img`
  width: 180px;
  display: block;
  margin: 0 auto;
`

const Footnote = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
  display: block;
`

const Success = (props) => {
  return (
    <Wrapper>
      <Panel>
        <PanelTitle>Booking Confirmation</PanelTitle>
        <BookingNumber bookingId={props.booking.id} />

        <DescriptiveList>
          <Descriptive label="Movie">{props.movie.title}</Descriptive>
          <Descriptive label="Cinema">{props.session.cinema}</Descriptive>
          <Descriptive label="Date">
            {format(props.session.time, 'MMM D, YYYY (dddd)')}
          </Descriptive>
          <Descriptive label="Time">
            {format(props.session.time, 'h:mm A')}
          </Descriptive>
          <Descriptive label="Number of Pax">
            {props.booking.quantity}
          </Descriptive>
        </DescriptiveList>

        <DescriptiveList>
          <QRCode src={qrCode} alt={props.booking.id} />
        </DescriptiveList>

        <DescriptiveList>
          <PanelTitle>How to use?</PanelTitle>
          <ol>
            <li>Show this confirmation page at the cinema ticketing counter.</li>
            <li>The staff will proceed with generating your tickets.</li>
            <li>Grab your popcorn and enjoy the movie!</li>
          </ol>
        </DescriptiveList>

        <DescriptiveList>
          <Flexbox>
            <Button link block width="100%">Download PDF</Button>&emsp;
            <Button link block width="100%">Print this page</Button>
          </Flexbox>
        </DescriptiveList>

        <DescriptiveList>
          <Footnote>A copy of this page has been sent to your email.</Footnote>
        </DescriptiveList>
      </Panel>
    </Wrapper>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    booking: state.bookings.byId[ownProps.location.query.id],
    movie: state.movies.byId[ownProps.params.movieId],
    session: state.movieSessions.byId[ownProps.params.movieSessionId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Success)