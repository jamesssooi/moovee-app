import React from 'react'
import styled from 'styled-components'
import format from 'date-fns/format'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { makeBooking } from 'services/bookings/actions'
import FAIcon from 'components/FAIcon'
import { Button, Container } from 'components/Layout'
import { brandColor } from 'shared/colors'
import { Panel, PanelTitle, PanelSubtitle } from './../components/Panel'
import {
  DescriptiveList,
  DescriptiveItem,
  DescriptiveLabel,
  DescriptiveValue,
  Descriptive
} from './../components/DescriptiveList'

const Wrapper = styled(Container)`
  padding-top: 60px;
  padding-bottom: 60px;
`

const TotalLabel = styled(DescriptiveLabel)`
  font-size: 1.5em;
  color: ${brandColor};
`

const TotalValue = styled(DescriptiveValue)`
  font-size: 1.5em;
  font-weight: bold;
`

const PaymentButton = styled(Button)`
  margin-bottom: 0;
  background-color: ${brandColor};
  border-color: ${brandColor};
`

const Confirmation = (props) => {
  return (
    <Wrapper>
      <Panel>
        <PanelTitle>Payment Confirmation</PanelTitle>
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
            {props.location.query.quantity || 1}
          </Descriptive>
        </DescriptiveList>
        <DescriptiveList>
          <PanelSubtitle>Payment</PanelSubtitle>
          <Descriptive label="Ticket Price">
            RM16.00
          </Descriptive>
          <Descriptive label="Discount (50% off)">
            &mdash; RM8.00
          </Descriptive>
          <Descriptive label="Booking fee">
            RM1.00
          </Descriptive>
          <DescriptiveItem>
            <TotalLabel>Total Payable</TotalLabel>
            <TotalValue>RM9</TotalValue>
          </DescriptiveItem>
        </DescriptiveList>

        <PaymentButton
          block
          link
          onClick={() => onSubmit(props)}
        >
          Proceed to payment
          {props.isFetching &&
            <span>&nbsp;<FAIcon icon="spinner" modifiers="fa-spin" /></span>
          }
        </PaymentButton>
      </Panel>
    </Wrapper>
  )
}

function onSubmit(props) {
  props.makeBooking('A7C8JK', props.location.query.quantity || 1)
  props.router.push(`/movies/${props.movie.movieId}/book/${props.session.id}/success?id=A7C8JK`)
}

const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: state.bookings.isFetching,
    movie: state.movies.byId[ownProps.params.movieId],
    session: state.movieSessions.byId[ownProps.params.movieSessionId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    makeBooking: (bookingId, quantity) => {
      dispatch(makeBooking(bookingId, quantity))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)
