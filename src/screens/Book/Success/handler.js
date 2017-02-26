import { fetchBooking } from 'services/bookings/actions'

export const onEnterSuccessPage = (store) => {
  return (nextState, replace, done) => {
    const bookingId = nextState.location.query.id
    if (!store.getState().bookings.byId[bookingId]) {
      store.dispatch(fetchBooking(bookingId))
        .then(() => done())
    } else {
      done()
    }
  }
}